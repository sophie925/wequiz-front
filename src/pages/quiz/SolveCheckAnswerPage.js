import QuizTemplate from "../../components/quiz/QuizTemplate";
import SolveCheckAnswer from "../../containers/quiz/SolveCheckAnswer";

const SolveResultPage = () => {
    return (
        <QuizTemplate type="result">
            <SolveCheckAnswer />
        </QuizTemplate>
    );   
};

export default SolveResultPage;