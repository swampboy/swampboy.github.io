import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  margin: 0;
  padding: 0;  
`;

const Image = props =>
    <Img src={props.src} />

Image.propTypes = {
    src: PropTypes.string.isRequired,
};

export default Image;