import React from "react";
import styled from "styled-components";
import { Loader } from "./withLoading";
import Track from "./Track";
import { connect } from "react-redux";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

const TracksContainer = props => {
  return (
    <ResultsContainer>
      <Loader isLoading={props.loading}>
        {props.tracks.map(track => (
          <Track key={track.track_id} track={track} />
        ))}
      </Loader>
    </ResultsContainer>
  );
};

const mstp = state => ({
  loading: state.tracks.searching,
  tracks: state.tracks.results
});

export default connect(mstp)(TracksContainer);
