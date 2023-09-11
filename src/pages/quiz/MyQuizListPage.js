import QuizTemplate from "../../components/quiz/QuizTemplate";
import MyQuizList from "../../containers/quiz/MyQuizList";

const MyQuizListPage = () => {
    return (
        <QuizTemplate type="mine" step="step1">
            <MyQuizList />
        </QuizTemplate>
    );
};

export default MyQuizListPage;