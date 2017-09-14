import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  margin: 0;
  padding: 0;
  ${(props) => props.styles};
  max-width: 100%;
`;

const Image = props =>
    <Img className={props.className} src={props.src} size={props.size} {...props} />

Image.propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.string,
};

Image.defaultProps = {
    size: '600px',
}

export default Image;