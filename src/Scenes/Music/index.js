import React from 'react';
import styled from 'styled-components';
import { SoundcloudIconLink, SoundCloudTracks } from '../../Elements';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
`;

const Track = styled.div`
    width: 180px;
    height: 180px;
    background-color: grey;
    border-radius: 15px;
    margin: 100px 0;

    &:active {
        background-color: tomato;        
    }
`;

const Music = () =>
    <Wrapper>
        <SoundcloudIconLink artist="butchdawson" size="48" />
        <div>
            <SoundCloudTracks />
        </div>
        <SoundcloudIconLink artist="basementRap" size="48" />
        
    </Wrapper>;
export default Music;