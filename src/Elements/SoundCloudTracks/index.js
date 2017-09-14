import React from 'react';
import styled from 'styled-components';
import { Image } from '../';

const TrackTiles = styled.div`
    display: flex;
    flex: 1 0 50%;
    flex-wrap: wrap;
    margin: 50px 0;
`;

const ImageWrap = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 32px 0;
    text-decoration: none;
`;

const RoundedImage = `
    border-radius: 15px;
`;

const SoundCloudTracks = ({ data }) => console.log(data) ||
    <TrackTiles>
        {
            data.map((item, i) =>
                <ImageWrap href={item.link} key={item.id}>
                    <Image src={item.cover[0].url} size="300px" styles={RoundedImage}/>
                    <h2>{item.title}</h2>
                </ImageWrap>
            )
        }
    </TrackTiles>;

export default SoundCloudTracks;