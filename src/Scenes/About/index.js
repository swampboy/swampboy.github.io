import React from 'react';
import styled from 'styled-components';
import { Image } from '../../Elements';
import about from '../../Assets/Images/about.png';


const Wrapper = styled.section`
    max-width: 363px;
    height: 75vh;
    text-transform: uppercase;
    display: flex;
`;

const H1 = styled.h1`
    margin-bottom: .2em;
    padding: 0px;
    font-weight: bold;
    // font-size: 1.75em;

    @media (max-device-width: 320px)  {
        // font-size: 3em;
    }
    
`;
    
const H2 = styled.h2`
    margin 0 0 2em 0;
    padding: 0;
    // font-size: 1.125em;
    font-weight: bold;
    
`;

const P = styled.p`;
    margin: 0px;
    padding: 0;
    text-transform: none;    
`;

const Copy = styled.article`;
    align-self: flex-end;
`;

const About = props => {
    return (
        <Wrapper>
            <Copy>
                <H1>Butch Dawson</H1>
                <H2>Baltimore</H2>
                <P>dolor sit amet, consectetur adipiscing elit. Mauris in tellus luctus, fringilla elit id, faucibus metus. Praesent aliquet, ligula non convallis. dolor sit amet, consectetur adipiscing elit. Mauris in tellus luctus, fringilla elit id, faucibus metus. Praesent aliquet, ligula non convallis.</P>
            </Copy>
        </Wrapper>
    );
};

export default About;