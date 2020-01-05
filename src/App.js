import React, {Component} from 'react';
import './App.css';

class App extends  Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstein"
        },
        {
          name: "Dracula"
        },
        {
          name: "Zombie"
        }
      ]
    }
  }

  render() {
    return (
        <div className='app'>
          {
            this.state.monsters.map((monster, index) => {
              return <h1 key={index}>{monster.name}</h1>
            })
          }
        </div>
    );
  }
}

export default App;
