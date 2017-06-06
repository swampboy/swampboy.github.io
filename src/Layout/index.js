import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar } from '../Components';

const Main = styled.main`
    height: 100vh;
    background-color: rgba(251, 245, 243, 1);
    font-family: Arial, Helvetica, sans-serif;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`;

const topLinks = [{to: '/', text: 'Swamp'}, {to: '/merch', text: 'Merch'}, {to: '/music', text: 'Music'}];
const bottomLinks = [{to: '/about', text: 'About'}, {to: '/contact', text: 'Contact'}];

const Layout = props =>
        <Main>
            <Navbar links={topLinks} />
                <ContentWrapper>
                    {props.children}
                </ContentWrapper>
            <Navbar position="bottom" links={bottomLinks} />
        </Main>;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;