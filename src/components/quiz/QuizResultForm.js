import { OwlIcon, ResultItem, SolveResultBlock, SolveResultBoxWrap, SovleQuizResult, SovleQuizResultDetail } from '../../styles/quiz/QuizSolveElements';
import Button from '../../components/common/Button';

const QuizResultForm = ({ totalCount, correctCount, onClick }) => {
    return (
        <SolveResultBlock>
            <h1>Good Job!</h1>
            <SolveResultBoxWrap>
                <OwlIcon />
                <Button fullwidth onClick={onClick}>정답 확인</Button>
            </SolveResultBoxWrap>
            <SovleQuizResult>
                <h3>총 {totalCount}문제</h3>
                <SovleQuizResultDetail>
                    <ResultItem>
                        <h4>정답률</h4>
                        <span>{Math.round((correctCount/totalCount) * 100)}%</span>
                    </ResultItem>
                    <ResultItem>
                        <h4>맞춘문제</h4>
                        <span>{correctCount}</span>
                    </ResultItem>
                    <ResultItem>
                        <h4>틀린문제</h4>
                        <span>{totalCount-correctCount}</span>
                    </ResultItem>
                </SovleQuizResultDetail>
            </SovleQuizResult>
        </SolveResultBlock>
    );
};

export default QuizResultForm;