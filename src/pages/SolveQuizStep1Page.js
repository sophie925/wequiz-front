import QuizTemplate from "../components/quiz/QuizTemplate";
import SolveQuizStep01 from "../containers/quiz/SolveQuizStep01";

const SolveQuizStep1Page = () => {
    return(
        <QuizTemplate type="solve" step="step1">
            <SolveQuizStep01 type="solve" step="step1" />
        </QuizTemplate>
    );
}

export default SolveQuizStep1Page;