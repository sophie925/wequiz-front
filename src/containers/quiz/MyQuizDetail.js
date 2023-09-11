import QuizDetailList from "../../components/quiz/QuizDetailList";
import { useLocation } from "react-router-dom";

const MyQuizDetail = () => {
    const location = useLocation();
    const { form } = location.state ?? '';
    
    return (
        <QuizDetailList
            type="mine"
            form={form}
        />
    );
};

export default MyQuizDetail;