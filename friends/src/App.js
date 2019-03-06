import React, { Component } from 'react';
import logo from './logo.svg';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FriendList />
        </header>
      </div>
    );
  }
}

export default App;
