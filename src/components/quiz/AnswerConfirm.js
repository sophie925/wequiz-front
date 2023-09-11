import styled from "styled-components";
import oc from 'open-color';
import { MdCheckCircle, MdCancel, MdTimer } from "react-icons/md";

const AnswerConfirmBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding-bottom: 44px;
    p {
        font-size: 50px;
        margin: 20px 0 10px;
    }
    span {
        font-size: 20px;
        strong {
            color: ${oc.red[8]};
        }
    }
    svg {
        font-size: 4rem;
    }
`;

const CorrectIcon = styled(MdCheckCircle)`
    color: ${oc.green[8]};
`;

const IncorrectIcon = styled(MdCancel)`
    color: ${oc.red[8]};
`;

const TimerIcon = styled(MdTimer)`
    color: ${oc.indigo[8]};
`;

const AnswerConfirm = (props) => {
    const { isCorrect, isTimeOverrun } = props;
    return(
        <AnswerConfirmBlock>
            {isCorrect ? (
                <>
                    <CorrectIcon /><p>정 답</p>
                </>
            ) :(
                <>
                    {isTimeOverrun ? (
                        <>
                            <TimerIcon />
                            <p>시간 초과</p>
                            <span>(시간 초과 시 <strong>오답</strong>으로 처리)</span>
                        </>
                    ) : (
                        <>
                            <IncorrectIcon /><p>오 답</p>
                        </>
                    )}
                </>
            )}
        </AnswerConfirmBlock>
    );
};

export default AnswerConfirm;