import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Track from './Track';
import { searchingSongs } from '../actions';
import { debounce } from 'underscore';

const SongsContainer = styled.div`
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

    onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    this.searchingSongsDebounced(e.target.value);
    };

    searchingSongsDebounced = debounce(value => {
    this.props.searchingSongs(value);
    }, 1000);

    render() {
        console.log(this.props);
        return (
            <div>
            <form
                onSubmit={e => {
                e.preventDefault();
                this.props.searchingSongs(this.state.searchTerm);
                }}
            >
            <input
                type="text"
                name="searchTerm"
                placeholder="Search Song"
                value={this.state.searchTerm}
                onChange={this.onChange}
            />
            </form>
            <SongsContainer>
                {this.props.songs.map(track => (
                    <Track key={track.track_id} track={track} />
                ))}
            </SongsContainer>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    songs: state.songs.results
});

export default connect(
    mapStateToProps,
    {
        searchingSongs
    }
)(Search);
