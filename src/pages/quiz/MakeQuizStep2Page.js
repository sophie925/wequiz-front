import QuizTemplate from "../../components/quiz/QuizTemplate";
import MakeQuizStep02 from "../../containers/quiz/MakeQuizStep02";

const MakeQuizStep2Page = () => {
    return (
        <QuizTemplate type="make" step="step2">
            <MakeQuizStep02 />
        </QuizTemplate>
    );
};

export default MakeQuizStep2Page;