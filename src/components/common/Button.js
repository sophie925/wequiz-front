import styled, { css } from "styled-components";
import oc from 'open-color';
import { Link } from "react-router-dom";

const buttonStyle = css`
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "BMHANNA Air";
    padding: 0.35rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    background: ${oc.gray[8]};
    &:hover {
        background: ${oc.gray[6]};
    }

    &:disabled {
      cursor: default;
      background: ${oc.gray[2]};
      &:hover {
        background: ${oc.gray[2]};
      }
    }

    ${props =>
      props.white &&
      css`
        background: white;
        border: 1px solid ${oc.gray[6]};
        color: ${oc.gray[8]};
        &:hover {
            box-sizing: border-box;
            color: white;      
        }
      `}
    
    ${props =>
      props.fullwidth &&
      css`
          padding: 0.9rem 0;
          margin-top: 1rem;
          width: 100%;
          font-size: 1.2rem;
      `}
    
    ${props =>
      props.indigo &&
      css`
        background: ${oc.indigo[8]};
        &:hover {
            background: ${oc.indigo[6]};
        }
      `}
    
    ${props =>
      props.medium &&
      css`
        margin: 0.25rem;
        padding: 1rem;
        width: 47%;
        font-size: 1.2rem;
      `}
    
    ${props =>
      props.indigo2 &&
      css`
        background: white;
        border: 2px solid ${oc.indigo[8]};
        box-sizing: border-box;
        color: black;
        &:hover, &:focus {
          color: white;
          background: ${oc.indigo[8]};
        }
      `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;
const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink
          {...props} 
          fullwidth={props.fullwidth? 1 : 0}
          medium={props.medium? 1 : 0}
          indigo={props.indigo? 1: 0}
          white={props.white? 1: 0}
        />
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;