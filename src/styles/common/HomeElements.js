import styled from "styled-components";
import oc from "open-color";
import { MdPlayCircleOutline } from 'react-icons/md';
import { Link as LinkR } from "react-router-dom";

export const HomePageBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 1rem;
`;

export const HomeNameBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const HomeRecentQuizBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 15px 20px;
    margin-bottom: 2rem;
    border: 2px solid ${oc.indigo[3]};
    background-color: ${oc.indigo[1]};
    cursor: pointer;
`;

export const HomeRecentQuiz = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HomeRecentQuizLabel = styled.span`
    color: ${oc.gray[6]};
    padding-bottom: 7px;
    font-size: 14px;
    font-weight: bold;
`;

export const HomeRecentQuizTitle = styled.p`
    margin: 0;
`;

export const PlayIcon = styled(MdPlayCircleOutline)`
    font-size: 25px;
    color: ${oc.indigo[8]};
`;

export const HomeQuizTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SeeAllLink = styled(LinkR)`
    color: ${oc.indigo[8]};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
`;