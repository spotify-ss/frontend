import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import SearchForm from '../components/SearchForm';
import TracksContainer from '../components/TracksContainer';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { loggingOut } from '../actions/auth';
import { gettingUserFit } from '../actions/track';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar
          loggingOut={this.props.loggingOut}
          gettingUserFit={this.props.gettingUserFit}
        />
        <p>Home Page</p>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <SearchForm />
              <TracksContainer />
            </>
          )}
        />
        <SpotifyPlayer />
      </div>
    );
  }
}

// const mstp = state => {};

export default connect(
  null,
  { loggingOut, gettingUserFit }
)(Home);
