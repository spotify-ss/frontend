import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import Track from './Track'
import RadarChart from './RadarChart'
import {DesktopFlex, ListContainer} from './StyledComps'

import {getTracks} from '../actions'

class TrackDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            similarTracks: [],
            fetchingSimilarTracks: false,
            error: null
        }
    }

    componentDidMount(){
        if(!this.props.expandedTrack) return
        this.getSimilarTracks(this.props.expandedTrack.name)
    }

    componentDidUpdate(prevProps){
        if(prevProps.expandedTrack !== this.props.expandedTrack){
            this.getSimilarTracks(this.props.expandedTrack.name)
        }
    }

    getSimilarTracks = (track) => {
        this.setState({
            fetchingSimilarTracks: true,
            similarTracks: []
        })
        axios.get(`https://spotify-ss-backend.herokuapp.com/api/track/get_closest_tracks/${track}`).then(res => {

            const queueTracks = JSON.parse(JSON.stringify(res.data.tracks));
            let trackIds = res.data.tracks.splice(1,50).map(track => track.track_id).join(',')

            this.props.getTracks(trackIds, this.props.accessToken).then(({data}) => {
                const updatedTracks = res.data.tracks.splice(1,50).map((t, i) => {
                    return {...data.tracks[i], ...queueTracks[i+1]}
                })

                this.setState({
                    similarTracks: updatedTracks,
                    fetchingSimilarTracks: false
                })
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                fetchingSimilarTracks: false,

                error: err.response.statusText
            })
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <DesktopFlex>
                <div style = {{flexGrow:'1'}}>
                    <p>Track Details</p>
                    {/* consistent in order */}
                    <RadarChart comparison audioFeatures = {[this.props.expandedTrackAudioFeatures, this.props.userMusicTaste]} expandedTrack = {this.props.expandedTrack}/>
                    <Track trackData = {this.props.expandedTrack}/>
                </div>
                <ListContainer>
                    <p>Similar Tracks</p>
                    {this.state.similarTracks.length > 0 && this.state.similarTracks.map(track => <Track key={track.track_id} trackData={track}/>)}
                    {this.state.fetchingSimilarTracks && <p>Fetching</p>}
                    {this.state.similarTracks.length === 0 && !this.state.fetchingSimilarTracks && <p>can't find similar tracks</p>}
                </ListContainer>
            </DesktopFlex>
        )
    }
}

const mstp = state => {
    return {
        accessToken: state.track.accessToken,
        expandedTrack: state.track.expandedTrack,
        expandedTrackAudioFeatures: state.track.expandedTrackAudioFeatures,
        hasError: state.auth.error,
        userMusicTaste: state.auth.userMusicTaste
    }
}

export default connect(mstp, {getTracks})(TrackDetails)