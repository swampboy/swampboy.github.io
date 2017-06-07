import React from 'react';
import styled from 'styled-components';
import data from './data';
import { Image } from '../';

const TrackTiles = styled.div`
    display: flex;
    flex: 1 0 50%;
    flex-wrap: wrap;
    margin: 50px 0;
`;

const ImageWrap = styled.div`
    padding: 10px;
    margin: 32px 0;
`;

const RoundedImage = `
    border-radius: 15px;
`;

const SoundCloudTracks = () =>
    <TrackTiles>
        {
            data.collection.map((item, i) => i < 3 && <ImageWrap><Image src={item.artwork_url} size="200px" styles={RoundedImage}/></ImageWrap>)
        }
    </TrackTiles>;

export default SoundCloudTracks;