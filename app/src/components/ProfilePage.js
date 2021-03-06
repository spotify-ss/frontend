import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import RadarChart from './RadarChart';
import Track from './Track';
import { DesktopFlex, ListContainer, Logout } from './StyledComps';

import { logout, getTracks, getUserData } from '../actions';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchingLikedTracks: false,
      likedTracksWithSpotifyData: [],
      isReacting: false
    };
  }

  componentDidMount() {
    // this.props.getUserData();
    // if (this.props.likedTracks) {
    //   this.getLikedTracks();
    // }
    this.toggleReacting();
  }

  getLikedTracks = () => {
    this.setState({
      fetchingLikedTracks: true,
      likedTracksWithSpotifyData: []
    });

    const { likedTracks } = this.props;

    const likedTracksCopy = JSON.parse(JSON.stringify(likedTracks.reverse()))

    let trackIds = likedTracksCopy.splice(0,50).map(track => track.track_id).join(',');

    if (trackIds.length > 0) {
      this.props.getTracks(trackIds, this.props.accessToken).then(res => {
        if (!res) return;

        const updatedTracks = res.data.tracks.map((track, i) => {
          return { ...track, ...likedTracks[i] };
        });


        this.setState(() => ({
          fetchingLikedTracks: false,
          likedTracksWithSpotifyData: updatedTracks
        }));
      });
    } else {
      this.setState({
        fetchingLikedTracks: false
      });

    }
  };

  toggleReacting = () => {
    // this.getLikedTracks();
    this.props.getUserData().then(() => {
      this.getLikedTracks();
    });
    this.setState({ ...this.state, isReacting: !this.state.isReacting });
  };

  handleLogOut = () => {
    this.props.history.push('/app/');
    this.props.logout();
  };
  render() {
    if (!this.props.likedTracks) return null;
    return (
      <DesktopFlex>
        <div style={{ flexGrow: '1' }}>
          {this.props.userMusicTaste && (
            <RadarChart audioFeatures={[this.props.userMusicTaste]} />
          )}
          <h1>Your Taste</h1>
          {this.props.likedTracks.length === 0 && (
            <p>get likin to develop your 'taste'</p>
          )}
          <Logout onClick={this.handleLogOut}>Signout</Logout>
        </div>
        <ListContainer>
          <p>most recent likes</p>
          {this.state.fetchingLikedTracks && <p>fetching liked tracks</p>}
          {this.state.likedTracksWithSpotifyData.map(track => (
            <Track
              key={track.id}
              trackData={track}
              toggleReacting={this.toggleReacting}
            />
          ))}
        </ListContainer>
      </DesktopFlex>
    );
  }
}

const mstp = state => {
  return {
    likedTracks: state.auth.userData.likedTracks,
    userMusicTaste: state.auth.userMusicTaste,
    accessToken: state.track.accessToken
  };
};

export default withRouter(
  connect(
    mstp,
    { logout, getTracks, getUserData }
  )(ProfilePage)
);

