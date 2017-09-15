import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import staticImage from '../../Assets/Images/Soundcloud.gif';

import { SoundcloudIconLink, SoundCloudTracks, Image, Link } from '../../Elements';
import { fetchMusicAssets } from '../../Redux/actions';

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cloud = styled.div`
    max-width: 200px;
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

const Music = ({ music, className }) =>
    <Wrapper className={className}>
        <Cloud>
            <Link to="http://soundcloud.com/butchdawson">
                <Image src={staticImage} />
            </Link>
        </Cloud>
        <SoundCloudTracks data={music}/>
    </Wrapper>;

export default enhance(Music);
