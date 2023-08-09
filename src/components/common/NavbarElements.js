import styled from "styled-components";
import oc from "open-color";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-router-dom';

export const Nav = styled.div`
    background-color: ${oc.indigo[3]};
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 10;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

    @media screen and(max-width: 768px) {
        width: 512px;
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 768px;
`;

export const NavLogo = styled(LinkR)`
    color: black;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        letter-spacing: 2px;
    }
    span {
        font-size: 0.7rem;
    }
`;

export const MoblieIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    height: inherit;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 992px) {
        display: flex;
        flex: 1 1;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    position: relative;
    &:hover:before {
        display: block;
    }
    &:before {
        display: none;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        left: 0;
        border-bottom: 4px solid ${oc.indigo[8]};
        border-radius: 5px;
        pointer-events: none;
        content: "";
    }
    a {
        color: black;
        font-weight: bold;
    }
`;

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const UserIconLink = styled(LinkR)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-size: 1.8rem;

    &:hover {
        color: ${oc.indigo[8]}
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${oc.indigo[8]};
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${oc.indigo[6]};
    }
`;