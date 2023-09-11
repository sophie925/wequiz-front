import { MdClose } from 'react-icons/md'
import { ModalCloseBtn, ModalContentBlock, ModalFormBlock, ModalTitleBlock, ModalTopBlock, ModalTopEndBlock, ModalTopFrontBlock, ModalWrap } from '../../styles/common/ModalElements';

const ModalForm = (props) => {
    return(
        <ModalFormBlock>
            <ModalWrap>
                <ModalTopBlock>
                    <ModalTopFrontBlock/>
                    <ModalTitleBlock>{props.title}</ModalTitleBlock>
                    <ModalTopEndBlock>
                    {props.onClose ?
                        <ModalCloseBtn onClick={props.onClose}>
                            <MdClose />
                        </ModalCloseBtn> : ''}
                    </ModalTopEndBlock>
                </ModalTopBlock>
                <ModalContentBlock>
                    {props.children}
                </ModalContentBlock>
            </ModalWrap>
        </ModalFormBlock>
    );
};

export default ModalForm;