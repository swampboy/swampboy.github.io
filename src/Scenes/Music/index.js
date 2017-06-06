import React from 'react';
import styled from 'styled-components';
import { Soundcloud, FlexRow } from '../../Elements';

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

const StyledFlexRow = styled(FlexRow)`
    border: 1px solid;
    padding: 100px 0;    
`;

const Music = () =>
    <Wrapper>
        <Soundcloud artist="butchdawson" size="48" />
        <StyledFlexRow justify="space-between">
            <Track />
            <Track />
            <Track />
        </StyledFlexRow>
        <Soundcloud artist="basementRap" size="48" />
        
    </Wrapper>;
export default Music;