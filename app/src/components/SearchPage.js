import React, {Component} from 'react'
import Track from './Track'
import {SongsContainer, SearchBar} from './StyledComps'

import spotifySearch from '../MockData/spotifySearchResponse'
let mockData = spotifySearch.tracks.items


export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>
                <SearchBar onSubmit = {e => e.preventDefault()}>
                <input  type='text' 
                        name='searchTerm'
                        placeholder = 'Search Song'
                        value = {this.state.searchTerm}
                        onChange = {this.onChange}/>    
                </SearchBar>
                <SongsContainer>
                    {mockData.map(track => <Track key = {track.id} trackData = {track}/>)}
                </SongsContainer>
            </div>
        )
    }
}