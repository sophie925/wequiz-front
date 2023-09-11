import styled from "styled-components";

export const DialogBlock = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const DialogWrap = styled.div`
    display: ${({isOpen}) => (isOpen ? '' : 'none')};
    width: 350px;
    padding: 1rem;
    margin: 1rem;
    background: white;
    border-radius: 5px;
`;

export const DialogContent = styled.div`
    padding-left: 10px;
    h3 {
        margin-bottom: 0;
        font-size: 1.4rem;
    }
`;

export const CloseBtnWrap = styled.span`
    border: none;
    background: none;
    color: #aaa;
    float: right;
    font-size:25px;
    font-weight: bold;
    padding: 0;
    cursor: pointer;
`;

export const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 5px;
    }
`;