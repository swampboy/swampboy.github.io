import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex
  flex-direction: row
  justify-content: space-around
  list-style-type: none
  padding: 1em 0
  
  a {
    text-decoration: none
    font-size: 1.3em
    color: rgba(100, 98, 98, 1)
  }
`;

const createFlexNav = (l) => <li><Link to={l.to}>{l.link}</Link></li>

const Navbar = (props) => {
    return (
        <Nav>
            {props.links.map(createFlexNav(l))}
        </Nav>
    );
};

Navbar.propTypes = {
    navlinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navbar;