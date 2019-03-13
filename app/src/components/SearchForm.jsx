import React, { Component } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  searchingTracks,
  searchingByArtists,
  toggleSearchArtist,
  searchTermChanged
} from '../actions';
import { debounce } from 'underscore';
// import { WSAEDQUOT } from 'constants';

class Search extends Component {
  componentDidMount() {
    this.props.searchingTracks('');
  }

  onChange = e => {
    this.props.searchTermChanged(e.target.value);
    this.searchingTracksDebounced(e.target.value);
  };

  searchingTracksDebounced = debounce(value => {
    this.props.byArtists
      ? this.props.searchingByArtists(value)
      : this.props.searchingTracks(value);
  }, 500);

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.byArtists
              ? this.props.searchingByArtists(this.props.searchTerm)
              : this.props.searchingTracks(this.props.searchTerm);
          }}
        >
          <div>
            <input
              type="text"
              name="searchTerm"
              placeholder="Search Track"
              value={this.props.searchTerm}
              onChange={this.onChange}
            />
          </div>
          <div>
            <p>By Artist</p>
            <input
              type="checkbox"
              checked={this.props.byArtists}
              onChange={this.props.toggleSearchArtist}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks.results,
  loading: state.tracks.searching,
  byArtists: state.tracks.searchingByArtists,
  searchTerm: state.tracks.searchTerms
});

export default connect(
  mapStateToProps,
  {
    searchingTracks,
    searchingByArtists,
    toggleSearchArtist,
    searchTermChanged
  }
)(Search);
