import styled from "styled-components";
import oc from "open-color";

export const QuizTemplateBlock = styled.div`
    display: flex;
    justify-content: center;
`;

export const QuizContentBlock = styled.div`
    width: 350px;
`;

export const QuizTopBlock = styled.div`
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 1.17rem;
    font-weight: bold;

    @media (max-width: 500px) {
        height: 56px;
    }
`;

export const QuizTopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const QuizBackLink = styled.a`
    display: flex;
    color: black;
    text-decoration: none;
    font-size: 28px;
    cursor: pointer;
`;

export const QuizTitle = styled.p`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
`;

export const QuizTopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const QuizMakeFormBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

// 퀴즈 만들기 스타일
// step2
export const QuizNumberBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0 40px;
    Button{
        margin: 0 5px;
        padding: 5px;
        min-width: 25px;
        position: none;
        background-color: ${oc.indigo[6]};
    }
`;

export const QuizNumberText = styled.p`
    display: flex;
    font-weight: bold;
`;

// 퀴즈 풀기 스타일
// step2
export const SolveQuizStep02Block = styled.div`
    width: 320px;
    margin: 0 auto;
`;

export const SolveQuizTopWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SolveQuizTopText = styled.span`
    display: flex;
    font-weight: bold;
`;

export const SolveQuizContentWrap = styled.div`
    background-color: #fefefe;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3); 
    border-radius: 6px;
    padding: 30px;
    margin: 5px 0 30px;
    
    label {
        font-family: "BMHANNA Air";
        font-size: 20px;
        font-weight: bold;
    }
`;

export const SolveQuizProblem = styled.p`
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 30px;
`;

export const SolveQuizHintWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HintItem = styled.div`
    background-color: ${({isShow}) => (isShow ? `${oc.yellow[1]}` : `${oc.indigo[1]}`)};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-between;
    pointer-events: ${({isShow}) => (isShow ? 'none' : '')};
    cursor: pointer;
`;

export const BtnSmallText = styled.span`
    font-size: 15px;
`;