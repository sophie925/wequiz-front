import QuizResultForm from '../../components/quiz/QuizResultForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { solveReset } from '../../modules/solve';

const SolveResult = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { quizPaperId, title, totalCount, correctCount, quizList } = location.state;
    
    const onClick = e => {
        dispatch(solveReset());
        navigate('/solveAnswerResult', {
            state: {
                quizPaperId: quizPaperId,
                title: title,
                correctCnt: correctCount,
                totalCnt: totalCount,
                quizList: quizList ?? ''
            }
        });
    };

    return (
        <QuizResultForm
            totalCount={totalCount}
            correctCount={correctCount}
            onClick={onClick}
        />
    );
};

export default SolveResult;