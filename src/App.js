import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Civic Data Project</h1>
        <div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">North Oakland</a>
                <a class="dropdown-item" href="#">West Oakland</a>
                <a class="dropdown-item" href="#">Chinatown</a>
                <a class="dropdown-item" href="#">San Antonio</a>
                <a class="dropdown-item" href="#">Fruitvale</a>
                <a class="dropdown-item" href="#">Central East Oakland</a>
                <a class="dropdown-item" href="#">Elmhurst</a>
                <a class="dropdown-item" href="#">Southeast Hills</a>
                <a class="dropdown-item" href="#">Lower Hills</a>
                <a class="dropdown-item" href="#">Northwest Hills</a>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
  }
}
  
  

export default App;
