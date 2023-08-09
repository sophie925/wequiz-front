import styled from "styled-components";
import oc from "open-color";
import { BsThreeDotsVertical } from "react-icons/bs";

export const QuizListBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const EmptyMessage = styled.p`
    text-align: center;
    padding-top: 20px;
`;

export const QuizItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    padding: 10px;
    border: 2px solid ${({isState}) => (isState === 'started'? `${oc.red[3]}` : `${oc.indigo[3]}`)};
    background-color: #fefefe;
    cursor: default;
`;

export const QuizItemTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const QuizItemTitle = styled.span`
    display: flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    svg {
        color: green;
        font-size: 1.3rem;
        padding-right: 5px;
        cursor: default;
    }
`;

export const IconBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const IconBtnWrap = styled.button`
    border: none;
    background: none;
    display: flex;
    padding: 0;
    color: ${({marked}) => (marked ? `${oc.yellow[6]}` : `${oc.gray[5]}`)};
    font-size: 1.5rem;
    cursor: pointer;
`;

export const ShareBtn = styled(BsThreeDotsVertical)`
    font-size: 1rem;
`;

export const QuizItemExplain = styled.div`
    color: ${oc.gray[6]};
`;

export const QuizItemExplain2 = styled.span`
    display: flex;
`;

export const LikeBtnWrap = styled.button`
    border: none;
    background: none;
    padding: 0;
    color: ${({marked}) => (marked ? `${oc.red[5]}` : `${oc.gray[5]}`)};
    font-size: 1.3rem;
    margin-top: 5px;
    cursor: ${({marked}) => (marked === undefined ? '' : 'pointer')};
`;

export const LikeActiveBtn = styled.div`
    display: flex;
    align-items: center;
`;

export const LikeActiveNum = styled.span`
    font-size: 16px;
    margin-left: 2px;
    display: ${({isShow}) => (isShow ? '' : 'none')};
`;