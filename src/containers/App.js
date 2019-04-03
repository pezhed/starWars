import React, { Component} from 'react';
import CardList from '../components/CardList';


class App extends Component {
  constructor(){
    super()
    this.state = {
        heroes: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(people => this.setState({ heroes: people }, function(){
      console.log(this.state.heroes);
    }));
  }

  render() {

    console.log("length is: " + this.state.heroes.results);
    return !this.state.heroes.results ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Wanted</h1>
              <CardList heroes={this.state.heroes}/>
        </div>
      );
  }

}

export default App;
