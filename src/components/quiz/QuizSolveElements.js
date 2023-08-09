import styled from "styled-components";
import oc from "open-color";
import { MdFlutterDash, MdDone, MdDirectionsRun } from "react-icons/md"

// 퀴즈 목록조회 화면
export const DropDownBlock = styled.div`
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    position: relative;
    * {
        box-sizing: border-box;
    }
`;

export const DropDownItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DropDownBtn = styled.button`
    width: 100%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    cursor: pointer;
    svg {
        font-size: 1.3rem;
    }
`;

export const DropDownContent = styled.div`
    border: 1px solid #ddd;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.175);
    margin-top: 0.25rem;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    z-index: 10;
    overflow: auto;
    position: absolute;
    top: 42px;
    display: ${({isShow}) => (isShow ? '' : 'none')};
    width: max-content;
    max-width: ${({isCate, isSort}) => (isSort ? '5rem' : (isCate ? '17rem' : '11rem'))};
    left: ${({isCate, isSort}) => (isSort ? '' : (isCate ? '22%': '0'))};
    right: ${({isSort}) => (isSort ? '0' : '')};
`;

export const CategoryBoxItem = styled.span`
    display: inline-block;
    background-color: ${({isCheck}) => (isCheck ? `${oc.indigo[3]}` : `${oc.indigo[1]}`)};
    border-radius: 10px;
    margin: 3px;
    padding: 5px;
    cursor: pointer;
`;

export const StateItem = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    cursor: pointer;
    svg {
        margin-right: 5px;
        font-size: 14px;
    }
`;

export const StateCheckIcon = styled(MdDone)`
    color: green;
`;

export const StateRunningIcon = styled(MdDirectionsRun)`
    color: ${oc.yellow[6]};
`;

export const TagBlock = styled.div`
    margin-top: 20px;
`;

export const SortItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    cursor: pointer;
`;

export const SelectIcon = styled(MdDone)`
    color: ${oc.indigo[8]};
`;

export const QuizListWrap = styled.div`
    margin-top: 4rem;
`;

export const QuizListTitleBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    p {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    svg {
        font-size: 1.3rem;
    }
`;

// 퀴즈 결과조회 화면
export const SolveResultBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const SolveResultBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${oc.yellow[5]};
    border-radius: 30px;
    padding: 50px 30px 30px;
    margin-bottom: 20px;
    height: 250px;
    button {
        color: #343a40;
        font-weight: bold;
        background-color: ${oc.yellow[3]};
        &:hover {
            background-color: ${oc.yellow[2]};
        }
    }
`;

export const OwlIcon = styled(MdFlutterDash)`
    display: flex;
    flex: 1;
    font-size: 130px;
    margin-bottom: 30px;
    animation: motion 0.5s linear 0s infinite alternate;
    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 15px;}
    }
`;

export const SovleQuizResult = styled.div`
    background-color: ${oc.yellow[1]};
    border-radius: 30px;
    padding: 10px;
    margin-bottom: 20px;
    h3 {
        text-align: center;
        margin: 10px;
    }
`;

export const SovleQuizResultDetail = styled.div`
    display: flex;
    padding: 10px 0;
    border-top: 2px dashed ${oc.yellow[2]};
`;

export const ResultItem = styled.div`
    width: 50%;
    text-align: center;
    border-right: 2px dashed ${oc.yellow[2]};
    &:last-child {
        border-right: none;
    }
    h4 {
        margin: 10px;
    }
`;

