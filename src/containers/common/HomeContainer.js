import Home from "../../components/common/Home";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getStartedQuiz } from "../../modules/quiz";
import { getListQuizPapers, solveReset } from "../../modules/solve";

const HomeContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { result } = useSelector(({ quiz }) => ({
        result: quiz.status
    }));
    const { result2 } = useSelector(({ solve }) => ({
        result2: solve.status
    }));
    const [quizData, setQuizData] = useState([]);
    const [quizList, setQuizList] = useState([]);
    const token = localStorage.getItem("user");

    useEffect(() => {
        if (token) {
            dispatch(getStartedQuiz());
        }
        setQuizData([]);
        dispatch(solveReset());
        dispatch(getListQuizPapers({ page: 1, size: 5, sort: "POPULARITY" }));
    }, [dispatch, token]);

    // 최근 진행중인 퀴즈 api 호출 후 로직
    useEffect(() => {
        if (result && result.status === 200) {
            console.log("최근 진행중인 퀴즈 조회 성공", result);
            setQuizData(result.data.data?.quizPapers);
        }
    }, [result, dispatch]);

    // 퀴즈 목록 조회(new) api 호출 후 로직
    useEffect(() => {
        if (result2 && result2.status === 200) {
            console.log("퀴즈 목록 조회 성공", result2);
            setQuizList(result2.data.data?.quizPapers);
            dispatch(solveReset());
        }
    }, [result2, dispatch]);

    // 최근 진행중인 퀴즈 클릭 시
    const onClickRecentQuiz = value => {
        const { quizPaperId, title } = value;
        navigate('/solveStep2', {
            state: {
                step: "started",
                quizPaperId: quizPaperId,
                title: title
            }
        });
    };

    return (
        <Home
            form={quizList}
            quizData={quizData}
            onClick={onClickRecentQuiz}
        />
    );
};

export default HomeContainer;