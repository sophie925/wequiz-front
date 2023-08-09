import QuizForm from "../../components/quiz/QuizForm";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { make, quizReset } from "../../modules/quiz";

const MakeQuizStep03 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, result } = useSelector(({ quiz }) => ({
        data: quiz.make,
        result: quiz.status,
    }));

    const onPrevClickHandle = e => {
        navigate('/makeStep2');
    };
    const onNextClickHandle = useCallback(e => {
        const { category, accessibility, title, description, quizzes } = data;
        console.log(category, accessibility, title, description, quizzes);
        dispatch(make({ category, accessibility, title, description, quizzes }));
    }, [data, dispatch]);

    // 퀴즈 저장 성공/실패 처리
    useEffect(() => {
        if (result && result.status === 201) {
            console.log("퀴즈 저장 성공: ", result);
            handleOpen();
        }
    }, [result]);
    
    // 퀴즈완성 안내메시지용 모달
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        handeldSuccess();
    };

    const handeldSuccess = () => {
        dispatch(quizReset());
        navigate('/');
    };

    // 초성생성 함수
    const cho_hangul = str => {
        const cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        let code, result = "";
        for (let i = 0; i < str.length; i++) {
            code = str.charCodeAt(i) - 44032;
            if (code > -1 && code < 11172) {
                result += cho[Math.floor(code/588)];
            }
        }
        return result;
    };

    return (
        <QuizForm
            step="step3"
            form={data}
            isOpen={isOpen}
            handleClose={handleClose}
            cho_hangul={cho_hangul}
            onClick={[onPrevClickHandle, onNextClickHandle]}
        />
    );
};

export default MakeQuizStep03;