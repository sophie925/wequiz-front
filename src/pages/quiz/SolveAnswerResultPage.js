import QuizTemplate from "../../components/quiz/QuizTemplate";
import SolveAnswerResult from "../../containers/quiz/SolveAnswerResult";

const SolveAnswerResultPage = () => {
    return (
        <QuizTemplate type="result">
            <SolveAnswerResult />
        </QuizTemplate>
    );   
};

export default SolveAnswerResultPage;