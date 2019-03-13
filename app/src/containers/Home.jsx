import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import Search from '../components/Search';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { loggingOut } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar loggingOut={this.props.loggingOut} />
        <p>Home Page</p>
        <Search />
        <SpotifyPlayer />
      </div>
    );
  }
}

// const mstp = state => {};

export default connect(
  null,
  { loggingOut }
)(Home);
