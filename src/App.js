import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends  Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({searchField: event.target.value}, () => console.log(this.state.searchField));
    // console.log(this.state.searchField);
  };

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
