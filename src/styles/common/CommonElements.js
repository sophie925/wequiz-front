import styled from "styled-components";
import oc from "open-color";

// 공통 컨텐츠 영역 (뒤로가기, 타이틀 등)
export const CommonBlock = styled.div`
    display: flex;
    justify-content: center;
`;

export const CommonWrapper = styled.div`
    width: 350px;
`;

export const CommonTopBlock = styled.div`
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

export const CommonTopFrontBlock = styled.div`
    display: flex;
    justify-content: ${({ isCheck }) => (isCheck ? 'center' : 'flex-start')};
    align-items: center;
    min-width: 64px;
`;

export const CommonTopBackLink = styled.a`
    display: flex;
    color: black;
    text-decoration: none;
    font-size: 28px;
    cursor: pointer;
`;

export const CommonTopTitle = styled.p`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
`;

export const CommonTopEndBlock= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-width: 64px;
`;

// 인풋박스 (로그인, 회원가입 제외)
export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

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
        height: 50px;

        &:focus {
            border: 2px solid ${oc.indigo[8]};
            box-sizing: border-box;
        }
    }
`;

// 인풋박스 + 버튼 (퀴즈만들기)
export const InputBtnWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    gap: 0.5rem;
`;

// 인풋박스 + 양쪽버튼 (퀴즈만들기)
export const BothInputWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        width: 100%;
        height: 50px;
    }
`;

// 에러메세지
export const ErrorText = styled.p`
    color: ${oc.red[8]};
    font-size: 15px;
    margin-top: ${({ isAuth, isCheck }) => (isAuth ? '12px' : (isCheck ? '' : '0'))};
    white-space: pre-line;
    
    font-weight: ${({ isCheck }) => (isCheck ? 'bold' : '')};
    margin-bottom: ${({ isCheck }) => (isCheck ? '0' : '')};
`;