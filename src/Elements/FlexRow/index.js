import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    width: 100%;
`;

const FlexRow = props => 
    <Row justify={props.justify}>
        {props.children}
    </Row>

export default FlexRow;