import styled from "styled-components";

export const PolicyPageBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color:#fefefe;
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
    font-size: 1.17rem;
    font-weight: bold;
    @media (max-width: 500px) {
        height: 56px;
    }
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
    p {
        font-size: 17px;
    }
    li {
        line-height: 25px;
        font-size: 17px;
    }
`;

export const TermsBlock = styled.div`
    ul {
        padding: 0;
        list-style: none;
    }
`;

export const PrivacyBlock = styled.div`
    ol {
        border: 1px solid #dedede;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 4rem;
    }
    ul {
        padding-left: 30px;
    }
`;

export const BoldBlock = styled.p`
    font-weight: bold;
`;

export const IconTitle = styled.p`
    display: flex;
    align-items: center;
`;