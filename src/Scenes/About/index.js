import React from 'react';
import { Image } from '../../Elements';
import about from '../../Assets/Images/about.png';

const About = props => {
    return (
        <div>
            <Image src={about} />
        </div>
    );
};

export default About;