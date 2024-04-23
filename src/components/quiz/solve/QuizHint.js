import { MdLockOutline, MdLockOpen } from "react-icons/md";
import { HintItem, SolveQuizHintWrap } from "../../../styles/quiz/QuizElements";

const QuizHint = ({ quiz, onClick }) => {
    return (
        <SolveQuizHintWrap>
            {quiz?.hints && quiz?.hints.map((hint, index) => (
                <HintItem
                    key={index}
                    isShow={hint.uncovered}
                    onClick={e => onClick(e, hint)}
                >
                    {hint.uncovered ? hint.hint : `힌트${hint.position + 1}`}
                    {hint.uncovered ? <MdLockOpen/> : <MdLockOutline />}
                </HintItem>
            ))}
        </SolveQuizHintWrap>
    );
};

export default QuizHint;