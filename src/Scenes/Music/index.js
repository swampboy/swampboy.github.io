import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { SoundcloudIconLink, SoundCloudTracks } from '../../Elements';
import { fetchMusicAssets } from '../../Redux/actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
`;

const mapStateToProps = (state) => ({
    music: state.music.data,
});

const enhance = compose(
    connect(mapStateToProps, null),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            dispatch(fetchMusicAssets());
        }
    }),
);

const Music = ({ music }) =>
    <div>
        <SoundCloudTracks data={music}/>
    </div>;

export default enhance(Music);
