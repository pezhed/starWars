import React, { Component} from 'react';
import CardList from '../components/CardList';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        data: []
    };
    console.log("in constructor: ");
  }

  componentDidMount(){
    fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(respJson => this.setState({ data: respJson.results }))
  }

  render() {
    console.log(this.state.data.length);
    return !this.state.data.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Wanted</h1>
              <CardList data={this.state.data}/>
        </div>
      );
  }

}

export default App;
