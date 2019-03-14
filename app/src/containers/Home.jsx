import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import SearchForm from '../components/SearchForm';
import ArtistNameSearch from '../components/ArtistNameSearch';
import TracksContainer from '../components/TracksContainer';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { loggingOut } from '../actions/auth';

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
        <Route exact path="/" component={SearchForm} />
        <Route path="/by_artist/:name" render={({ match }) => (
          <ArtistNameSearch artistName={match.params.name} />
        )}/>
        <TracksContainer />
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
