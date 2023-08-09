import styled from "styled-components";
import oc from "open-color";
import QuizDetailList from "../../components/quiz/QuizDetailList";
import DonutGraph from "../../components/common/DonutGraph";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { viewQuizPaper } from "../../modules/solve";

const SolveCheckAnswerResultBlock = styled.div`
    background-color: ${oc.indigo[1]};
    border-radius: 15px;
    padding: 10px 15px 0;
    margin-bottom: 20px;
`;

const SovleResultTitleLabel = styled.p`
    color: ${oc.gray[7]};
    font-weight: bold;
    margin-bottom: 0;
`;

const SolveResultTitle = styled.h3`
    margin: 5px 0 12px;
`;

const SolveResultCircleGraphWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f2f2f2;
    background-color: ${oc.indigo[3]};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px 30px 20px 15px;
    p {
        font-size: 18px;
        strong {
            color: ${oc.indigo[7]};
        }
    }
`;

const SolveCheckAnswer = () => {
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
    }, [dispatch, quizPaperId]);

    useEffect(() => {
        if (form && form.status === 200) {
            console.log("퀴즈 결과화면 조회 성공!", form);
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
        <>
            <SolveCheckAnswerResultBlock>
                <SovleResultTitleLabel>퀴즈제목</SovleResultTitleLabel>
                <SolveResultTitle>{title}</SolveResultTitle>
                <SolveResultCircleGraphWrap>
                    <DonutGraph
                        correctRate={correctRate}
                        correctCount={correctCount}
                        totalCount={totalCount}
                    />
                    <p><strong>{totalCount}개의 퀴즈</strong> 중 <br /><strong>{correctCount}개</strong>를 맞췄습니다.</p>
                </SolveResultCircleGraphWrap>
            </SolveCheckAnswerResultBlock>
            <h3>나의 답안지</h3>
            {quizData && <QuizDetailList type="result" form={quizData} />}
        </>
    );
};

export default SolveCheckAnswer;