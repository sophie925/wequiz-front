import { MdCheckCircle, MdCancel } from "react-icons/md";
import styled from "styled-components";
import oc from 'open-color';

const AnswerConfirmBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
`;

const AnswerConfirm = (props) => {
    return(
        <AnswerConfirmBlock>
            {props.isCorrect ? (
                <>
                    <MdCheckCircle style={{color: `${oc.green[8]}`}} /><p>정 답</p>
                </>
            ) :(
                <>
                    <MdCancel style={{color: `${oc.red[8]}`}} /><p>오 답</p>
                </>
            )}
        </AnswerConfirmBlock>
    );
};

export default AnswerConfirm;