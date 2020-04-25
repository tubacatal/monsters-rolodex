import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
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

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
        <div className='app'>
          <input type='search'
                 placeholder='search monsters'
                 onChange={(event) => {
                   this.setState({searchField: event.target.value}, () => console.log(this.state.searchField));
                   // console.log(this.state.searchField);
                 }}/>
          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;
