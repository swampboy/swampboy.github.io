import React from 'react';
import styled from 'styled-components';
import { Image } from '../';

const TrackTiles = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 500px) {
        display: block;
    }
`;

const ImageWrap = styled.a`
    position: relative;
    display: flex; // for art and title stacking
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    padding: 2em   
`;

const RoundedImage = `
    border-radius: 15px;
    width: 300px;
    object-fit: cover;
    box-shadow: 10px 15px 25px 0 rgba(0,0,0,.2);

    transition: box-shadow .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: -10px;

    &:hover {
        box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
  
      }
`;

const SoundCloudTracks = ({ data, className }) => console.log(data) ||
    <TrackTiles className={className}>
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