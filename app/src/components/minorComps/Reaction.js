import React from 'react'
import {connect} from 'react-redux'

import { upthumbTrack, downthumbTrack, deleteUpthumbTrack, deleteDownthumbTrack } from '../../actions';

import {Smile,Frown} from 'react-feather'



const Reaction = ({
    upthumbTrack,
    downthumbTrack,
    thumbedUp,
    thumbedDown,
    deleteUpthumbTrack,
    deleteDownthumbTrack
  }) => {
    // Liked
    // Disliked
    // Neutral

    return (
        <div>
            <Smile 
                size={30} 
                color={thumbedUp ? 'green': 'black'}
                onClick={thumbedUp ? deleteUpthumbTrack : upthumbTrack} 
            />
            <Frown 
                color={thumbedDown ? 'red': 'grey'}
                size={30} 
                onClick={thumbedDown ? deleteDownthumbTrack : downthumbTrack}
            />
        </div>
    )
}

// Map State to Props, find out if this track is upthumbed/downthumbed
// based on id and checking for id in those arrays
const mstp = (state, ownProps) => {

    const id = ownProps.trackId
  
    // destructure uppedIds and downedIds from state.thumbs (thumbReducer)
    const { uppedIds, downedIds } = state.thumbs;
  
    // if uppedIds includes this track, assume this track has been upthumbed
    const thumbedUp = uppedIds.indexOf(id) > -1 ? 1 : 0;
  
    // same for down
    const thumbedDown = !thumbedUp && downedIds.indexOf(id) > -1 ? 1 : 0;
    // return those as props
    return {
      state: {...state},
      thumbedUp,
      thumbedDown
    };
  };
  
  // Map dispatch to props, send the ids here from ownProps
  const mdtp = (dispatch, ownProps) => {
    const userId = localStorage.getItem('userID');
    console.log('ownProps: ', ownProps.trackId)
    return {
      upthumbTrack: () => dispatch(upthumbTrack(ownProps.trackId, userId)),
      downthumbTrack: () => dispatch(downthumbTrack(ownProps.trackId, userId)),
      deleteUpthumbTrack: () => dispatch(deleteUpthumbTrack(ownProps.trackId)),
      deleteDownthumbTrack: () => dispatch(deleteDownthumbTrack(ownProps.trackId)),
    };
  };
  
  export default connect(
    mstp,
    mdtp
  )(Reaction)
