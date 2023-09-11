import { ButtonGroup, CloseBtnWrap, DialogBlock, DialogContent, DialogWrap } from "../../styles/common/DialogElements";
import Button from "./Button";
import { MdClose } from 'react-icons/md'

const Dialog = ({ isOpen, title, children, onClose, before, after }) => {
    return (
        <DialogBlock>
            <DialogWrap isOpen={isOpen}>
                {onClose ? <CloseBtnWrap onClick={onClose}><MdClose /></CloseBtnWrap> : ''}
                <DialogContent>
                    <h3>{title}</h3>
                    <p>{children}</p>
                </DialogContent>
                <ButtonGroup>
                    <Button onClick={before.onClick}>{before.text ?? '취소'}</Button>
                    <Button indigo onClick={after.onClick}>{after.text?? '확인'}</Button>
                </ButtonGroup>
            </DialogWrap>
        </DialogBlock>
    );
};

export default Dialog;