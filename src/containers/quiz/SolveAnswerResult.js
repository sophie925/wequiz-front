import QuizAnswerResultForm from "../../components/quiz/QuizAnswerResultForm";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewQuizPaper } from "../../modules/solve";

const SolveAnswerResult = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { quizPaperId, title, correctCnt, totalCnt, quizList } = location.state;
    const { form } = useSelector(({ solve }) => ({
        form: solve.status,
    }));
    const [correctCount, setCorrentCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [correctRate, setCorrectRate] = useState(0);
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (!token) { // 비회원인 경우
            setCorrentCount(correctCnt);
            setTotalCount(totalCnt);
            const rate = Math.round((correctCnt/totalCnt) * 100) /100;
            setCorrectRate(rate);
            setQuizData(quizList);

        } else { // 회원인 경우
            dispatch(viewQuizPaper(quizPaperId));
        }
    }, [dispatch, correctCnt, totalCnt, quizList, quizPaperId]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("퀴즈 결과화면 조회 성공!", form);
            const quizData = form?.data.data;
            setQuizData(quizData);
            let count = 0;
            quizData.forEach(value => {
                if (value.status === "SOLVED") count += 1;
            });
            setCorrentCount(count);
            setTotalCount(quizData.length);
            const rate = Math.round((count/quizData.length) * 100) /100;
            setCorrectRate(rate);
        }
    }, [form]);

    return (
        <QuizAnswerResultForm
            title={title}
            correctRate={correctRate}
            correctCount={correctCount}
            totalCount={totalCount}
            quizData={quizData}
        />
    );
};

export default SolveAnswerResult;