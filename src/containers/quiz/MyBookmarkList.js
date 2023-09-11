import QuizListContainer from "./QuizListContainer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListBookmarked, quizReset } from "../../modules/quiz";


const MyBookmarkList = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ quiz }) => ({
        form: quiz.status
    }));
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        setQuizData([]);
        dispatch(quizReset());
        dispatch(getListBookmarked());
    }, [dispatch]);

    // 북마크한 퀴즈 목록 조회 api 호출 후 로직
    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("북마크 목록 조회 성공", form);
            setQuizData(form.data.data);
        }
    }, [form]);

    return (
        <QuizListContainer
            type="bookmark"
            form={quizData}
        />
    );
};

export default MyBookmarkList;