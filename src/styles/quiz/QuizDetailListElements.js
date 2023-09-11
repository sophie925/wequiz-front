import styled from "styled-components";
import oc from 'open-color';

export const QuizDetailListBlock = styled.div`
    background-color: ${oc.indigo[1]};
    border-radius: 10px;
    padding: 20px 15px;
`;

export const QuizDetailListTopWrap = styled.div``;

export const QuizCategory = styled.span`
    background-color: ${oc.indigo[8]};
    border-radius: 5px;
    padding: 5px;
    color: white;
`;

export const QuizTitle = styled.h3`
    margin: 15px 0 5px;
`;

export const QuizDescription = styled.p`
    margin-top: 5px;
    color: gray;
`;

export const QuizItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const QuizItem = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`;

export const QuizItemNum =  styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`;

export const CorrectCheck = styled.div`
    display: flex;
    margin-left: 5px;
    font-size: 1.2rem;
    color: ${({isCorrect}) => (isCorrect ? `${oc.green[8]}` : `${oc.red[8]}`)};
`;

export const QuizProblem = styled.h1`
    color: ${({isCorrect}) => (isCorrect ? `${oc.green[8]}` : `${oc.red[8]}`)};
`;

export const QuizItemLabel = styled.span`
    background-color: white;
    border: 1px solid ${oc.gray[3]};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 5px;
    height: max-content;
`;

export const QuizSortWrap = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

export const QuizAnswer = styled.span`
    background-color: ${oc.indigo[5]};
    border-radius: 5px;
    padding: 5px;
    color: white;
`;

export const QuizHintWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    width: max-content;
    max-width: 16rem;
`;

export const QuizHint = styled.span`
    background-color: ${oc.gray[3]};
    border-radius: 5px;
    padding: 5px;
`;