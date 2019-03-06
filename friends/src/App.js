import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{JSON.stringify(this.props.friends)}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(mapStateToProps, { fetchFriends })(App);
