import React from 'react';
import styled from 'styled-components';
import { Image } from '../';
import {
    compose,
    withState,
    withHandlers,
} from 'recompose';

const TrackTiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 500px) {
        display: block;
    }
`;


const ImageWrap = styled.a`
    position: relative;
    display: flex; // for art and title stacking
    max-width: 100%;
    max-height: 100%;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    padding: 2em;
    color: rgba(100, 98, 98, .0);
    transition: color 200ms ease-in-out;
    &:hover {
        color: rgba(100, 98, 98, 1);
    }
`;

const RoundedImage = `
    border-radius: 15px;
    width: 250px;
    object-fit: cover;
    filter: drop-shadow(1px 1px 10px rgba(0,0,0, .01));

    transition: filter .6s ease-in-out;
    margin-top: -10px;

    &:hover {
        filter: drop-shadow(8px 16px 15px rgba(0,0,0, .4));
      }

    @media only screen and (max-width: 320px) {
        width: 200px;
    }
`;

const SoundCloudTracks = ({ data, className}) => console.log(data) ||
    <TrackTiles className={className}>
        {
            data.map((item, i) =>
                <ImageWrap href={item.link} key={item.id}>
                    <Image src={item.cover[0].url} size="300px" styles={RoundedImage} />
                    <h4>{item.title}</h4>
                </ImageWrap>
            )
        }
    </TrackTiles>;

export default SoundCloudTracks;