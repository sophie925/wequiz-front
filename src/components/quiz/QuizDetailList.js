import { MdOutlineCreate, MdCheckCircle, MdCancel } from 'react-icons/md'
import { CorrectCheck, QuizAnswer, QuizCategory, QuizDescription, QuizDetailListBlock, QuizDetailListTopWrap, QuizHint, QuizHintWrap, QuizItem, QuizItemLabel, QuizItemNum, QuizItemWrap, QuizProblem, QuizSortWrap, QuizTitle } from '../../styles/quiz/QuizDetailListElements';
import { categoryMap, changeInitialConsonant } from '../../utils/QuizUtil';

const QuizDetailList = ({ type, form }) => {
    const quizData = type === "result" ? form : form.quizzes;
    return(
        <QuizDetailListBlock>
            {(type === "mine" || type === "make") && (
                <QuizDetailListTopWrap>
                    <QuizCategory>{categoryMap[form.category]}</QuizCategory>
                    <QuizTitle>{form.title}</QuizTitle>
                    <QuizDescription>{form.description}</QuizDescription>
                </QuizDetailListTopWrap>
            )}
            <QuizItemWrap>
                {quizData.map((quiz, index) => (
                    <QuizItem key={index}>
                        <QuizItemNum>
                            <MdOutlineCreate /> {index+1}번 문제
                            {type === "result" && (
                                <CorrectCheck isCorrect={quiz.status === "SOLVED"}>
                                    {quiz.status === "SOLVED" ? <MdCheckCircle /> :<MdCancel />}
                                </CorrectCheck>
                            )}
                        </QuizItemNum>
                        {type === "result" ? (
                            <QuizProblem isCorrect={quiz.status === "SOLVED"}>{quiz.problem}</QuizProblem>
                        ) : (
                            <h1>{changeInitialConsonant((quiz.answer).trim())}</h1>
                        )}
                        <QuizSortWrap>
                            <QuizItemLabel>정답</QuizItemLabel>
                            {quiz.answer && <QuizAnswer>{quiz.answer}</QuizAnswer>}
                        </QuizSortWrap>
                        <QuizSortWrap>
                            <QuizItemLabel>힌트</QuizItemLabel>
                            <QuizHintWrap>
                                {type === "result" ? (
                                    quiz.hints?.length === 0 ? (
                                        <QuizHint>힌트 미사용</QuizHint>
                                    ) : (
                                        quiz.hints.map((hint, index) => (
                                            (hint.uncovered && <QuizHint key={index}>{hint.hint}</QuizHint>)
                                        ))
                                    )
                                ) : (
                                    quiz.hints.map((hint, index) => (
                                        <QuizHint key={index}>{hint}</QuizHint>
                                    ))
                                )}
                            </QuizHintWrap>
                        </QuizSortWrap>
                    </QuizItem>
                ))}
            </QuizItemWrap>
        </QuizDetailListBlock>
    );
};

export default QuizDetailList;