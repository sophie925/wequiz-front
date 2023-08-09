import styled from "styled-components";
import Button from "./Button";
import { MdClose } from 'react-icons/md'

const DialogBlock = styled.div`
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

const DialogContent = styled.div`
    display: ${({isOpen}) => (isOpen ? '' : 'none')};
    width: 350px;
    padding: 1rem;
    margin: 1rem;
    background: white;
    border-radius: 5px;
    h3 {
        margin-bottom: 0;
        font-size: 1.5rem;
    }
`;

const CloseBtnWrap = styled.span`
    border: none;
    background: none;
    color: #aaa;
    float: right;
    font-size:25px;
    font-weight: bold;
    padding: 0;
    cursor: pointer;
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 5px;
    }
`;

const Dialog = ({ isOpen, title, children, onClose, before, after }) => {
    return (
        <DialogBlock>
            <DialogContent isOpen={isOpen}>
                {onClose ? <CloseBtnWrap onClick={onClose}><MdClose /></CloseBtnWrap> : ''}
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button onClick={before.onClick}>{before.text ?? '취소'}</Button>
                    <Button indigo onClick={after.onClick}>{after.text?? '확인'}</Button>
                </ButtonGroup>

            </DialogContent>
        </DialogBlock>
    );
};

export default Dialog;