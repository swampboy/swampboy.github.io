import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { withState, withHandlers, compose } from 'recompose';
import { FadeIn } from '../';
import { Link, Image } from '../../Elements';
import Icon from '../Icon';
import swamp_boy_text from '../../Assets/Images/swamp_boy_text.png';

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
        
    @media screen (min-device-width: 768px)  {
        display: none;
    }

    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;

    a {
        text-decoration: none;
        color: rgba(100, 98, 98, 1);
    }

    
`;

const Ul = styled.ul`
    list-style-type: none;
    position: absolute;
    right: 0;
    top: 3em;
    

    opacity: ${({ active }) => +active };
    transition: opacity 200ms ease;

    padding: 0;
    margin:  0;

    li {
        font-size: 1.3em;
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

const LogoWrap = styled.div`
    max-width: 100%;
`;

const H1 = styled.h1`
    max-width: 100%;
    text-transform: uppercase;
`;

// const hydrateLink = (l) => <li onClick={onClick} active={active} key={l.text}><Link to={`${l.to}`}>{l.text}</Link></li>

const MobileNav = ({ links, onClick, active, onRef, onWrapperBlur, className }) => (
    <Nav className={className}>
        <Callouts>
            {/**
             * <LogoWrap>
                <Image src={swamp_boy_text}/>
            </LogoWrap>
             */}
             <Link to="/">
                <H1>Swamp Boy</H1>
             </Link>
            <Button onClick={onClick}>
                <Icon 
                    active={active} 
                    size="2em" 
                    name="hamburger" 
                />
            </Button>
        </Callouts>
        <Ul active={active} ref={onRef} onBlur={onWrapperBlur}>
            {links.map((l) => 
                <li onClick={onClick} active={active} key={l.text}>
                    <Link to={`${l.to}`}>{l.text}</Link>
                </li>)
            }
        </Ul>
    </Nav>
);

MobileNav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default enhance(MobileNav);