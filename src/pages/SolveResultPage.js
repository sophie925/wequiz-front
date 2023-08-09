import QuizTemplate from "../components/quiz/QuizTemplate";
import SolveResult from "../containers/quiz/SovleResult";

const SolveResultPage = () => {
    return (
        <QuizTemplate type="result">
            <SolveResult />
        </QuizTemplate>
    );   
};

export default SolveResultPage;