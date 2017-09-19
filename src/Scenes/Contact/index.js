import React from 'react';
import styled from 'styled-components';
import { Image } from '../../Elements';
import mail from '../../Assets/Images/mail.gif';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;

    @media only screen and (max-width: 620px) {
        flex-direction: column;
        img {
            margin: 0;
            padding: 0;
        }
    }
`;

const Mail = styled(Image)`
    max-width: 168px;
    margin: 2em;
`;

const H1 = styled.h1`
    font-size: 1.75em;
    padding-bottom: 0;
    margin-bottom: 0;
`;

const Email = styled.a`
    text-decoration: none;
    color: rgba(100, 98, 98, .5);
    transition: color 200ms ease-in-out;
    &:hover {
        color: rgba(100, 98, 98, 1);
    }
`;

const Contact = props => {
    return (
        <Wrapper>
            <Mail src={mail} />
            <div>
                <H1>All inquires</H1>
                <Email href="mailto:findbutchdawson@gmail.com">findbutchdawson@gmail.com</Email>
            </div>
        </Wrapper>
    );
};

export default Contact;