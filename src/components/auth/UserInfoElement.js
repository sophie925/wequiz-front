import styled from "styled-components";
import oc from "open-color";
import { Link as LinkS } from 'react-router-dom';
import { Link as LinkR } from 'react-router-dom';

export const UserInfoBlock = styled.div`
    display: flex;
    justify-content: center;
    * {
        box-sizing: border-box;
    }
`;

export const UserInfoWrapper = styled.div`
    width: 350px;
    /* overflow: auto; */
`;

export const UserInfoTopBlock = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.17rem;
    font-weight: bold;
    margin-bottom: 15px;
    @media (max-width: 500px) {
        height: 56px;
    }
`;

export const UserInfoTopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const UserInfoBackLink = styled(LinkR)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 28px;
`;

export const UserInfoTitle = styled.p`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
`;

export const UserInfoTopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const UserInfoDescription = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1px 15px;
    margin-bottom: 10px;
`;

export const UserInfoNameLink = styled(LinkS)`
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    svg {
        margin-left: 3px;
        font-size: 1.2rem;
    }
`;

export const UserInfoPointBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${oc.indigo[1]};
    border-radius: 30px;
    padding: 0 35px;
    margin: 8px 0;
    font-weight: bold;
`;

export const UserInfoPointLabel = styled.label`
    color: ${oc.gray[6]};
    font-size: 14px;
    margin-bottom: 3px;
`;

export const UserInfoPointText = styled.span`
    color: ${oc.gray[8]};
`;

export const UserInfoQuickMenuBlock = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${oc.indigo[5]};
    border-radius: 10px;
    padding: 10px 0;
    margin-bottom: 30px;
`;

export const UserInfoQuickMenuItemLink = styled(LinkS)`
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${oc.indigo[2]};
    padding: 0 70px;
    
    &:last-child {
        border-right: none;
    }
    svg {
        font-size: 1.8rem;
        margin-bottom: 5px;
    }
`;

export const UserInfoItemBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`;

export const UserInfoContentItemLink = styled(LinkR)`
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const UserInfoQuizState = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
`;

export const QuizStatsData = styled.div`
    padding: 0 20px 0 10px;
`;

export const StatsItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
        margin: 8px;
    }
`;

export const MakeQuizWrap = styled.div`
    background-color: ${oc.indigo[3]};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    p {
        margin-top: 0;
        &:last-child {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
`;

export const UserInfoUl = styled.ul`
    padding: 0;
    margin: 0;
`;

export const UserInfoLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #ddd; */
    &:last-child {
        border: none;
    }
    svg {
        margin-left: 10px;
        font-size: 1.2rem;
    }
`;

export const UserInfoLabel = styled.p`
    font-weight: bold;
`;

export const UserInfoLink = styled(LinkS)`
    text-decoration: none;
    color: gray;
    display: flex;
    align-items: center;
`

export const UserInfoItemLink = styled(LinkS)`
    background-color: ${oc.indigo[1]};
    border-radius: 10px;
    padding: 15px;
    display: grid;
    grid-template-columns: 60px 1fr 20px;
    align-items: center;
    margin-bottom: 15px;
    text-decoration: none;
    color: black;
`;

export const IconWrap = styled.div`
    display: inline-block;
    background-color: white;
    border-radius: 20px;
    padding: 9px 10px 6px;
    margin-right: 20px;
    color: ${oc.indigo[8]};
    font-size: 1.3rem;
`;

export const LogoutWrap = styled.div`
    margin-top: 50px;
    margin-bottom: 20px;
    button {
        background-color: ${oc.gray[1]};
        color: ${oc.gray[6]};
        font-size: 16px;
        &:hover {
            background-color: ${oc.gray[2]};
        }
    }
`;

export const WithDrawBtn = styled.button`
    border: none;
    background: none;
    text-decoration: underline;
    font-family: "BMHANNA Air";
    font-size: 16px;
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`;

export const UserPhotoIconWrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: 5rem;
    color: ${oc.gray[4]};
    margin-bottom: 40px;
`;

export const InputWrap = styled.div`
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
        height: 50px;
        &:focus {
            border: 2px solid ${oc.indigo[8]};
            box-sizing: border-box;
        }
    }
`;

export const ErrorText = styled.p`
    color: ${oc.red[8]};
    margin-top: 0px;
    white-space: pre-line;
    font-size: 15px;
`;