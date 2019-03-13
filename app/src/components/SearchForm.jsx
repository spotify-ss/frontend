import React, { Component } from "react";
// import styled from 'styled-components';
import { connect } from "react-redux";
import { searchingTracks, searchingByArtist } from "../actions";
import { debounce } from "underscore";
// import { WSAEDQUOT } from 'constants';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      searchingByArtist: false
    };
  }

  componentDidMount() {
    this.props.searchingTracks("");
  }

  handleCheckBox = e => {
    this.setState({
      ...this.state,
      searchingByArtist: !this.state.searchingByArtist
    })
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.searchingTracksDebounced(e.target.value);
  };

  searchingTracksDebounced = debounce(value => {
    this.state.searchingByArtist 
    ? this.props.searchingByArtist(value)
    : this.props.searchingTracks(value)
  }, 500);

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.searchingTracks(this.state.searchTerm);
          }}
        >
          <div>
            <input
              type="text"
              name="searchTerm"
              placeholder="Search Track"
              value={this.state.searchTerm}
              onChange={this.onChange}
            />
          </div>
          <div>
            <p>By Artist</p>
            <input
              type="checkbox"
              onChange={this.handleCheckBox}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks.results,
  loading: state.tracks.searching
});

export default connect(mapStateToProps,
  {
    searchingTracks,
    searchingByArtist
  }
)(Search);
