import { MdOutlineCreate } from "react-icons/md";
import { TextField } from "../../../../node_modules/@mui/material/index";
import { SolveQuizContentWrap, SolveQuizProblem, SolveQuizStep02Block, SolveQuizTopText, SolveQuizTopWrap } from "../../../styles/quiz/QuizElements";
import { ErrorText } from "../../../styles/common/CommonElements";
import ProgressBar from "../../common/ProgressBar";
import Button from "../../common/Button";
import QuizHint from "./QuizHint";
import TimerContainer from "../../../containers/quiz/TimerContainer";

const QuizSolveForm = ({
    form,
    quiz,
    quizLength,
    currentIndex,
    checkTime,
    setIsTimeOverrun,
    onChange,
    onKeyPress,
    errorText,
    hintClick,
    onClick
}) => {
    return (
        <SolveQuizStep02Block>
        {quiz && (
            <>
                <ProgressBar length={quizLength} index={currentIndex}/>
                <SolveQuizTopWrap>
                    <SolveQuizTopText>
                        <MdOutlineCreate />
                        {quizLength}문제 중 {currentIndex+1}번째
                    </SolveQuizTopText>
                    <TimerContainer checkTime={checkTime} setIsTimeOverrun={setIsTimeOverrun} />
                </SolveQuizTopWrap>
                <SolveQuizContentWrap>
                    <SolveQuizProblem>{quiz?.problem}</SolveQuizProblem>
                    <TextField
                        fullWidth
                        name="answer"
                        label="정 답"
                        value={quiz?.answer ?? ''}
                        InputLabelProps={{ shrink: true }}
                        variant="standard"
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    <ErrorText isCheck={true}>{errorText}</ErrorText>
                </SolveQuizContentWrap>
                <QuizHint quiz={quiz} onClick={hintClick} />
                <Button fullwidth indigo onClick={onClick}>
                    {form && currentIndex === quizLength-1 ? (
                        <>최 종 확 인<br/><span>(결과화면 이동)</span></>
                    ) : (
                        <>정 답 확 인<br/><span>(다음문제 이동)</span></>
                    )}
                </Button>
            </>
        )}
        </SolveQuizStep02Block>
    );
};

export default QuizSolveForm;