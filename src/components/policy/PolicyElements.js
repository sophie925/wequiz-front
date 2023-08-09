import styled from "styled-components";

export const PolicyPageBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color:#fefefe;
    p {
        font-size: 17px;
    }
`;

export const PolicyWrap = styled.div`
    background-color: #fefefe;
    width: 100%;
    max-width: 768px;
    height: 100%;
    @media (max-width: 500px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const TopBlock = styled.div`
    padding: 0 20px;
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-sizing: border-box;
    @media (max-width: 500px) {
        height: 56px;
    }
`;

export const TopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const TitleBlock = styled.div`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
    font-size: 1.17rem;
    font-weight: bold;
`;

export const TopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const CloseBtn = styled.button`
    border: none;
    background: none;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    padding: 8px;
    margin: -8px;
    cursor: pointer;
`;

export const ContentBlock = styled.div`
    padding: 0px 20px 20px;
    line-height: 20px;
    ul {
        padding: 0;
        list-style: none;
        font-size: 17px;
    }
    ol {
        border: 1px solid #dedede;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    li {
        line-height: 25px;
    }
`;