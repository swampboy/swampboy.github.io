import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StylediFrame = styled.iframe`
    border: none;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

const Soundcloud = props =>
    <StylediFrame 
    title="soundcloud"
    allowtransparency="true" 
    scrolling="no" 
    frameborder="no" 
    src={`https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2F${props.artist}&color=orange_transparent&size=${props.size}`} 
    size={props.size}>
    </StylediFrame>

Soundcloud.propTypes = {
    artist: PropTypes.string.isRequired,
    size: PropTypes.string,
};

Soundcloud.defaultProps = {
    size: '48',
};

export default Soundcloud;