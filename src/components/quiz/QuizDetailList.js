import { MdOutlineCreate, MdCheckCircle, MdCancel } from 'react-icons/md'
import styled from "styled-components";
import oc from 'open-color';

const QuizDetailListBlock = styled.div`
    background-color: ${oc.indigo[1]};
    border-radius: 10px;
    padding: 20px 15px;
`;

const QuizDetailListTopWrap = styled.div``;

const QuizCategory = styled.span`
    background-color: ${oc.indigo[8]};
    border-radius: 5px;
    padding: 5px;
    color: white;
`;

const QuizTitle = styled.h3`
    margin: 15px 0 5px;
`;

const QuizDescription = styled.p`
    margin-top: 5px;
    color: gray;
`;

const QuizItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const QuizItem = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 5px;
`;

const QuizItemNum =  styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`;

const CorrectCheck = styled.div`
    display: flex;
    margin-left: 5px;
    font-size: 1.2rem;
    color: ${({isCorrect}) => (isCorrect ? `${oc.green[8]}` : `${oc.red[8]}`)};
`;

const QuizProblem = styled.h1`
    color: ${({isCorrect}) => (isCorrect ? `${oc.green[8]}` : `${oc.red[8]}`)};
`;

const QuizItemLabel = styled.span`
    background-color: white;
    border: 1px solid ${oc.gray[3]};
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    margin-right: 5px;
    height: max-content;
`;

const QuizSortWrap = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

const QuizAnswer = styled.span`
    background-color: ${oc.indigo[5]};
    border-radius: 5px;
    padding: 5px;
    color: white;
`;

const QuizHintWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    width: max-content;
    max-width: 16rem;
`;

const QuizHint = styled.span`
    background-color: ${oc.gray[3]};
    border-radius: 5px;
    padding: 5px;
`;

const categoryMap = {
    GENERAL_KNOWLEDGE: '일반상식',
    MUSIC: '음악',
    MOVIE: '영화',
    TV_SHOW: '드라마/예능',
    HISTORY: '역사',
    SCIENCE: '과학',
    ENTERTAINMENT: '오락',
    ART: '예술',
    SOCIAL: '사회',
    LIVING: '생활/삶',
    ETC: '기타'
};

const QuizDetailList = ({ type, form, cho_hangul }) => {
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
                            <h1>{cho_hangul((quiz.answer).trim())}</h1>
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