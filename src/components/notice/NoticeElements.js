import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NoticeBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    * {
        box-sizing: border-box;
    }
`;

export const NoticeWrapper = styled.div`
    width: 100%;
    max-width: 768px;
    height: 100%;
    @media (max-width: 500px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const NoticeTopBlock = styled.div`
    height: 64px;
    width: 100%;
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

export const NoticeTopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoticeBackLink = styled(LinkR)`
    text-decoration: none;
    color: black;
    display: flex;
    font-size: 28px;
`;

export const NoticeTopTitle = styled.p`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
`;

export const NoticeTopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const NoticeContentBlock = styled.div`
    padding: 0 20px;
    text-align: center;
`;

export const NoticeButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const NoticeUl = styled.ul`
    padding: 0;
    border-top: 2px solid #e8e8e8;
    border-bottom: 2px solid #e8e8e8;
    text-align: left;
`;

export const NoticeLi = styled.li`
    border-bottom: 1px solid #e8e8e8;
    list-style: none;
    &:last-child {
        border-bottom: none;
    }
`;
export const NoticeNoneLi = styled.li`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 30px;
`;

export const NoticeLink = styled.a`
    color: black;
    text-decoration: none;
    overflow: hidden;
    padding: 0 35px 0 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    @media (max-width: 500px) {
        display: block;
        padding: 14px 10px 16px 0;
    }
`;

export const NoticeTitle = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    padding: 20px 20px 20px 8px;
    @media (max-width: 500px) {
        padding: 0 15px 0 0;
        line-height: 26px;
    }
`;

export const NoticeDate = styled.span`
    display: inline-block;
    color: #888;
    padding: 20px 0;
    @media (max-width: 500px) {
        padding: 0;
    }
`;

export const NoticeWrap = styled.div`
    border-top: 2px solid #e8e8e8;
    border-bottom: 2px solid #e8e8e8;
    text-align: left;
    margin-bottom: 30px;
`;

export const NoticeBottomWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

// 공지사항 글 상세조회
export const NoticeReadTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    @media (max-width: 500px) {
        display: block;
        padding: 10px 0;
    }
`;

export const NoticeReadTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    @media (max-width: 500px) {
        line-height: 30px;
    }
`;

export const NoticeReadContent = styled.div`
    line-height: 20px;
    min-height: 150px;
    padding: 30px 0 10px;
`;

// 공지사항 작성 - 글쓰기
export const NoticeWriteItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    label {
        width: 10%;
    }
    input, textarea {
        font-family: "BMHANNA Air";
        border: 1px solid #ddd;
        border-radius: 6px;
        outline: none;
        width: 90%;
        box-sizing: border-box;
        padding: 15px 20px;
        margin-left: 10px;
        font-size: 16px;
    }
    input {
        height: 50px;
    }
    textarea {
        resize: none;
        height: 200px;
    }
`;