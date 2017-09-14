import React from 'react';
import styled from 'styled-components';
import { Image } from '../../Elements';
import about from '../../Assets/Images/about.png';


const Wrapper = styled.div`
    margin-top: 7em;
    max-width: 363px;
    text-transform: uppercase;
`;

const H1 = styled.h1`
    margin-bottom: .2em;
    padding: 0px;
    font-weight: bold;
    font-size: 1.75em;

    @media (max-device-width: 320px)  {
        font-size: 3em;
    }
    
`;
    
const H2 = styled.h2`
    margin 0 0 2em 0;
    padding: 0;
    font-size: 1.125em;
    font-weight: bold;
    
`;

const P = styled.p`;
    margin: 0px;
    padding: 0;
    text-transform: none;    
`;

const About = props => {
    return (
        <Wrapper>
            <H1>Butch Dawson</H1>
            <H2>Baltimore</H2>
            <P>dolor sit amet, consectetur adipiscing elit. Mauris in tellus luctus, fringilla elit id, faucibus metus. Praesent aliquet, ligula non convallis. dolor sit amet, consectetur adipiscing elit. Mauris in tellus luctus, fringilla elit id, faucibus metus. Praesent aliquet, ligula non convallis.</P>
        </Wrapper>
    );
};

export default About;