import React, { Component} from 'react';
import CardList from '../components/CardList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        data: []
    };
    console.log("in constructor: ");
  }

  componentDidMount(){
    const url = "https://swapi.co/api/people/";

    // const promises = Promise.all([
    //   fetch(url),
    //   fetch(url + '?page=2')
    // ]);
    //
    // promises
    //   .then((results) =>
    //     Promise.all(results.map(r => r.text()))
    //   )
    //   .then(console.log)
    fetch(url)
    .then(response => response.json())
    .then(respJson => this.setState({ data: respJson.results }))
  }

  render() {

    return !this.state.data.length ?
      <h1>Loading</h1> :
      (
        <div>
          <h1>Star Wars</h1>
              <CardList data={this.state.data}/>
        </div>
      );
  }

}

export default App;
