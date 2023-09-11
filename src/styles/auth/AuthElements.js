import styled from "styled-components";
import oc from "open-color";
import { Link as LinkS } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';

/* 화면 전체를 채움 */
export const AuthTemplateBlock = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background-color: #edf0fc;
    @media (max-width: 500px) {
        background-color: white;
    }
`;
/* 흰색 박스 */
export const WhiteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    background-color: #fefefe;
    width: 400px;
    z-index: 10;
    box-sizing: border-box;

    @media (max-width: 500px) {
        box-shadow: none;
    }
`;

export const AuthFormBlock = styled.div`
    margin-bottom: 40px;
    .label {
        position: relative;
        color: #ddd;
        font-family: 'Nanum Gothic';
    }
    .label input {
        border: 1px solid #ddd;
        border-radius: 6px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        padding: 15px 20px;
        font-size: 16px;
        margin-top: 10px;
        height: 50px;
    }
    input.fc + label {
        top: 2px;
        font-size: 12px;
    }
    .label label {
        pointer-events: none;
        position: absolute;
        top: 24px;
        left: 20px;
        transition: all .1s linear;
        background: #fff;
        box-sizing: border-box;
        padding: 0px 5px;
    }
    .label input:focus {
        border: 2px solid ${oc.indigo[8]};
        outline: 0;
    }
    .label input:focus + label, .label input:valid + label {
        top: 2px;
        font-size: 12px;
        color: ${oc.indigo[8]};
    }
`;

export const AuthLogoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5rem;
    margin: 50px 0;
    font-weight: bold;
    cursor: pointer;
`;

export const AuthLogoLink = styled(LinkS)`
    text-decoration: none;
    color: black;
`;

export const AuthLogoTitle = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    letter-spacing: 2px;
`;

export const AuthLogoSmallTitle = styled.span`
    font-size: 1rem;
`;

export const AuthBottomWrap = styled.div`
    margin-top: 5rem;
    text-align: center;
    span {
        font-size: 14px;
        color: gray;
    }
`;

export const BottomLinkWrap = styled.div`
    margin-top: 15px;
`;

export const BottomLink = styled(LinkR)`
    text-decoration: none;
    color: ${oc.indigo[8]};
    font-weight: bold;
    padding-left: 5px;
`;

export const BottomLink2 = styled(LinkR)`
    text-decoration: none;
    color: ${oc.gray[6]};
    font-weight: bold;
`;