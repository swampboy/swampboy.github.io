import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;

    div:first-of-type {
        height: 100px;
        width: 200px;
        background-color: grey;
        border-radius: 2%;
        margin-right: 15%;
    }
`;


const Contact = props => {
    return (
        <Wrapper>
            <div>
                <h2>All Inquiries</h2>
                <p>findbutchdawnson@gmail.com</p>
            </div>
        </Wrapper>
    );
};

export default Contact;