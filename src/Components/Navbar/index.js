import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const createFlexNav = (l) => <li><Link to={l.to}>{l.link}</Link></li>

const NavBar = (props) => {
    return (
        <Nav>
            {props.links.map(createFlexNav(l))}
        </Nav>
    );
};

NavBar.propTypes = {
    navlinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavBar;