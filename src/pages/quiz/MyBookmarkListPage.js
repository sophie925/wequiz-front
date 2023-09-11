import QuizTemplate from "../../components/quiz/QuizTemplate";
import MyBookmarkList from "../../containers/quiz/MyBookmarkList";

const MyBookmarkListPage = () => {
    return (
        <QuizTemplate type="bookmark" step="step1">
            <MyBookmarkList />
        </QuizTemplate>
    );
};

export default MyBookmarkListPage;