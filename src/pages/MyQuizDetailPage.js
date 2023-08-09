import QuizTemplate from "../components/quiz/QuizTemplate";
import MyQuizDetail from "../containers/quiz/MyQuizDetail";

const MyQuizDetailPage = () => {
    return (
        <QuizTemplate type="mine" step="step2">
            <MyQuizDetail />
        </QuizTemplate>
    );
};

export default MyQuizDetailPage;