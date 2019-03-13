import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import {play} from '../actions'

const imgWidth = 30
const fontSize = 1

const TrackPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 5px 0;
    h1{
        font-size: ${fontSize}em;
        text-align: left;
    }
    h2{
        font-size: ${fontSize/1.5}em;
        text-align: left;
    }
    div{
        width: 100%;
        margin: 0 0 10px;
        margin-left: 10px;
    }
    img{
        width: ${imgWidth}%;
        height: ${imgWidth}%;
    }
    audio{
        width: 100%;
    }
`

const Track = ({track}) => {
    return(
        <TrackPreview>
            <h1>{track.name}</h1>
            <h2>{track.artist_name}</h2>
        </TrackPreview>
    )
}

const mstp = state => {
    return {
        track: state.track.currentTrack
    }
}
export default connect(mstp, {play})(Track)

// <img src={props.album.images[1].url} alt="" onClick ={() => props.play(props.id)}/> 
//  <div>
//  <h1>{props.name}</h1>
//  <h2>{props.artists.map(artist => `${artist.name}, `)}</h2>
//  <audio src={props.preview_url} controls controlsList = 'nodownload'></audio>
// </div>