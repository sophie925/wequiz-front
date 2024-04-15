import { SolveAnswerResultBlock, SolveResultCircleGraphWrap, SolveResultTitle, SovleResultTitleLabel } from "../../styles/quiz/QuizSolveElements";
import QuizDetailList from "../../components/quiz/QuizDetailList";
import DonutGraph from "../../components/common/DonutGraph";

const QuizAnswerResultForm = ({ title, correctRate, correctCount, totalCount, quizData}) => {
    return (
        <>
            <SolveAnswerResultBlock>
                <SovleResultTitleLabel>퀴즈제목</SovleResultTitleLabel>
                <SolveResultTitle>{title}</SolveResultTitle>
                <SolveResultCircleGraphWrap>
                    <DonutGraph
                        correctRate={correctRate}
                        correctCount={correctCount}
                        totalCount={totalCount}
                    />
                    <p><strong>{totalCount}개의 퀴즈</strong> 중 <br /><strong>{correctCount}개</strong>를 맞췄습니다.</p>
                </SolveResultCircleGraphWrap>
            </SolveAnswerResultBlock>
            <h3>나의 답안지</h3>
            {quizData && <QuizDetailList type="result" form={quizData} />}
        </>
    );
};

export default QuizAnswerResultForm;