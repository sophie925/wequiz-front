import QuizListContainer from "./QuizListContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mine, quizReset } from "../../modules/quiz";

const MyQuizList = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ quiz }) => ({
        form: quiz.status,
    }));
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        dispatch(quizReset());
        dispatch(mine());
    }, [dispatch]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("내 퀴즈 조회 성공:", form)
            setQuizData(form.data.data);
        }
    }, [form]);

    return (
        <QuizListContainer
            type="mine"
            form={quizData}
        />
    );
};

export default MyQuizList;