import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { withState, withHandlers, compose } from 'recompose';
import { FadeIn } from '../';
import { Link } from '../../Elements';
import Icon from '../Icon';

const enhance = compose(
    withState('active', 'toggleMenu', false),
    withHandlers({
        onClick: props => e => {
            props.toggleMenu(!props.active);
        },
        onClickOutside: () => {
            let element = null;
            return {
              onRef: () => (ref) => (element = ref),
              onWrapperBlur: ({ onClickOutside }) => (e) => {
                if (!element.contains(e.relatedTarget)) {
                  onClickOutside();
                }
              }
            }
        }
    })
);

const on = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const off = keyframes`
0%, 100% {
    opacity: 1
}
50% {
    opacity: 0
}
`;

const Nav = styled.nav`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
`;

const Ul = styled.ul`
    list-style-type: none;
    animation: ${({ active }) => active ? on : off} 1s ease-in-out;
    padding: 0;
    margin:  0;  
    a {
        text-decoration: none;
        font-size: 1.3em;
        color: rgba(100, 98, 98, 1);
    }
`;

const Callouts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
`;

const MenuIcon = styled(Icon)`
`;

// const hydrateLink = (l) => <li onClick={onClick} active={active} key={l.text}><Link to={`${l.to}`}>{l.text}</Link></li>

const MobileNav = ({ links, onClick, active, onRef, onWrapperBlur, className }) => (
    <Nav className={className}>
        <Callouts>
            <h1>Swamp Boy</h1>
            <Button onClick={onClick}>
                <MenuIcon 
                    active={active} 
                    size="2em" 
                    name="hamburger" 
                />
            </Button>
        </Callouts>
        {active && 
            <Ul active={active} ref={onRef} onBlur={onWrapperBlur}>
                {links.map((l) => 
                    <li onClick={onClick} active={active} key={l.text}>
                        <Link to={`${l.to}`}>{l.text}</Link>
                    </li>)
                }
            </Ul>
        }
    </Nav>
);

MobileNav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default enhance(MobileNav);