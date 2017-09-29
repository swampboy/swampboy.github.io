import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import soundCloudImage from '../../Assets/Images/Soundcloud.gif';
import basementRapImage from '../../Assets/Images/icon_brlogo.png';

import { SoundcloudIconLink, SoundCloudTracks, Image, Link, Loader } from '../../Elements';
import { fetchMusicAssets } from '../../Redux/actions';

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cloud = styled.div`
    max-width: 100px;
    margin: 3em;
`;

const BasementRap = styled.div`
    max-width: 75px;
    margin: 1em;
`;

const enhance = compose(
    connect((state) => ({
        isFetching: state.music.isFetching,
        music: state.music.data,
    }), null),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            dispatch(fetchMusicAssets());
        }
    })
);

const Music = ({ music, className, isFetching }) =>
    <Wrapper className={className}>
        <Cloud>
            <Link to="http://soundcloud.com/butchdawson">
                <Image src={soundCloudImage} />
            </Link>
        </Cloud>
        {!isFetching && <SoundCloudTracks data={music} /> || <Loader />}
        <BasementRap>
            <Image src={basementRapImage} />        
        </BasementRap>
    </Wrapper>;

export default enhance(Music);
