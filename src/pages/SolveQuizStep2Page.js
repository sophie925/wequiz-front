import QuizTemplate from "../components/quiz/QuizTemplate";
import SolveQuizStep02 from "../containers/quiz/SolveQuizStep02";

const SolveQuizStep2Page = () => {
    return (
        <QuizTemplate type="solve" step="step2">
            <SolveQuizStep02 type="solve" step="step2" />
        </QuizTemplate>
    );
};

export default SolveQuizStep2Page;