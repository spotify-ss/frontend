import React, {Component} from 'react'
import {connect} from 'react-redux'

import SearchPage from '../SearchPage'
import NavBar from '../NavBar'
import ProfilePage from '../ProfilePage'
import SpotifyPlayer from '../SpotifyPlayer'
import TrackDetails from '../TrackDetails'
import SpotifyReAuth from '../minorComps/SpotifyReAuth'

import {getUserData} from '../../actions'

import {BrowserRouter as Router, Route} from 'react-router-dom'

class MainApp extends Component {
    
    componentDidMount(){
        this.props.getUserData()       
    }

    render(){
        return (
            <Router>
                <>
                <NavBar/>
                <Route exact path = '/app' component = {SearchPage} />
                <Route exact path = '/app/profile' component = {ProfilePage} />
                <Route path = '/app/track/:id' component = {TrackDetails} />
                {this.props.needAuth && <SpotifyReAuth/>}
                <SpotifyPlayer />
                </>
            </Router>
        )
    }
}

const mstp = state => {
    return {
        needAuth: state.track.needAuth
    }
}

export default connect(mstp, {getUserData})(MainApp)