import QuizTemplate from "../../components/quiz/QuizTemplate";
import MakeQuizStep01 from "../../containers/quiz/MakeQuizStep01";

const MakeQuizStep1Page = () => {
    return (
        <QuizTemplate type="make" step="step1">
            <MakeQuizStep01 />
        </QuizTemplate>
    );
};

export default MakeQuizStep1Page;