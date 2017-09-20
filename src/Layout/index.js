import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Navbar, MobileNav } from '../Components';

const Main = styled.main`
    font-family: 'Sofia Pro', Arial, Helvetica, sans-serif;
    padding: 1.7em;
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5d9cc;
`;
const BottomNav = styled.div`
    margin-top: 5%;
`;

const topLinks = [{to: '/', text: 'Swamp'}, {to: 'https://basementrap.bigcartel.com', text: 'Merch'}, {to: '/music', text: 'Music'}];
const bottomLinks = [{to: '/about', text: 'About'}, {to: '/contact', text: 'Contact'}];
const allLinks = [...topLinks, ...bottomLinks];

const Layout = props =>
        <Main>
            <Navbar links={topLinks} />
            <MobileNav links={allLinks}/>
                <ContentWrapper>
                    {props.children}
                </ContentWrapper>
            <BottomNav>
                <Navbar links={bottomLinks} />
            </BottomNav>
        </Main>;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;