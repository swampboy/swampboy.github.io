import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '../../Elements';

const Nav = styled.div`
  @media (min-device-width: 768px)  {
    display: flex;
  }
  display: none;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 1em 0;
  
  a {
    text-decoration: none;
    color: rgba(100, 98, 98, 1);
  }

`;

const createFlexNav = (l) => <li key={l.text}><Link to={`${l.to}`}>{l.text}</Link></li>

const Navbar = (props) => {
    return (
        <Nav position={props.position}>
            {props.links.map(createFlexNav)}
        </Nav>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;