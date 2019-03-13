import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Track from './Track';
import { searchingTracks } from '../actions';
import { debounce } from 'underscore';
import { Loader } from '../components/withLoading';
import { WSAEDQUOT } from 'constants';

const TracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
  }

  componentDidMount() {
    this.props.searchingTracks('');
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.searchingTracksDebounced(e.target.value);
  };

  searchingTracksDebounced = debounce(value => {
    this.props.searchingTracks(value);
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
          <input
            type="text"
            name="searchTerm"
            placeholder="Search Track"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
        </form>
        <TracksContainer>
          <Loader isLoading={this.props.loading}>
            {this.props.tracks.map(track => (
              <Track key={track.track_id} track={track} />
            ))}
          </Loader>
        </TracksContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks.results,
  loading: state.tracks.searching
});

export default connect(
  mapStateToProps,
  {
    searchingTracks
  }
)(Search);