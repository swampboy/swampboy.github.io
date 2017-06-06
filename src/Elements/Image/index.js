import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  margin: 0;
  padding: 0;
  height: ${({ size }) => size };
`;

const Image = props =>
    <Img src={props.src} size={props.size}/>

Image.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
};

Image.defaultProps = {
    size: '600px',
}

export default Image;