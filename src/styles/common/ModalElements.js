import styled from "styled-components";

export const ModalFormBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    @media (max-width: 500px) {
        background-color:#fefefe;
    }
`;

export const ModalWrap = styled.div`
    background-color: #fefefe;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    min-height: 200px;
    @media (max-width: 500px) {
        width: 100%;
        max-width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;

export const ModalTopBlock = styled.div`
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

export const ModalTopFrontBlock = styled.div`
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ModalTitleBlock = styled.div`
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
    font-size: 1.17rem;
    font-weight: bold;
`;

export const ModalTopEndBlock = styled.div`
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
`;

export const ModalCloseBtn = styled.button`
    border: none;
    background: none;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    padding: 8px;
    margin: -8px;
    cursor: pointer;
`;

export const ModalContentBlock = styled.div`
    padding: 0px 20px 20px;
`;