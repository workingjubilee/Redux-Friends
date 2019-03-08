import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: 0
    };
  };
  componentDidMount() {
    this.props.fetchFriends();
    const timestamp = new Date(Date.now()).toString();
    this.setState(prevState=> ({
      mountTime: timestamp
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Component Mounted: {this.state.mountTime}</p>
          <p>Axios Began: {this.props.friends.beginTime}</p>
          <p>Axios Returned: {this.props.friends.returnTime}</p>
          {this.props.friends.list && <FriendList friends={this.props.friends.list} />}
          <p>{JSON.stringify(this.props.friends.error)}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  login: state.login
});

export default connect(mapStateToProps, { fetchFriends })(App);
