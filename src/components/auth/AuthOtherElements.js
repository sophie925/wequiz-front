import styled from "styled-components";
import oc from "open-color";
import { Link as LinkR } from "react-router-dom";
import { FormGroup } from "../../../node_modules/@mui/material/index";

export const AuthOtherTopBlock = styled.div`
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
    font-size: 1.17rem;
    font-weight: bold;
    
    @media (max-width: 500px) {
        height: 56px;
    }
`;

export const AuthOtherTopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AuthOtherBackLink = styled(LinkR)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 28px;
`;

export const AuthOtherTitle = styled.p`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
`;

export const AuthOtherTopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const AuthOtherFormBlock = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px 30px;
`;


export const AuthOtherInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    label {
        font-weight: bold;
        margin-bottom: 5px;
    }
    input {
        border: 1px solid #ddd;
        border-radius: 6px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        padding: 15px 20px;
        font-size: 14px;
        margin-bottom: 12px;
        &:focus {
            border-color: ${oc.indigo[8]};
            box-sizing: border-box;
        }
    }
`;

export const CheckboxWrap = styled(FormGroup)`
    margin: 10px;
    span {
        font-family: "BMHANNA Air";
    }
    svg {
        font-size: 1rem;
    }
`;

export const HrStyle = styled.hr`
    border: 1px solid #dfdfdf;
    margin-top: 10px;
    width: 100%;
`;