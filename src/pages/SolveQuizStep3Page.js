import QuizTemplate from "../components/quiz/QuizTemplate";
import SolveQuizStep03 from "../containers/quiz/SolveQuizStep03";

const SolveQuizStep3Page = () => {
    return (
        <QuizTemplate type="solve" step="step3">
            <SolveQuizStep03 type="solve" step="step3"/>
        </QuizTemplate>
    );
};

export default SolveQuizStep3Page;