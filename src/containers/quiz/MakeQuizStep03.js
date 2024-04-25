import QuizMakeForm from "../../components/quiz/make/QuizMakeForm";
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

    const onClick = useCallback(e => {
        const { category, accessibility, title, description, quizzes } = data;
        dispatch(make({ category, accessibility, title, description, quizzes }));
    }, [data, dispatch]);

    // 퀴즈 저장 성공/실패 처리
    useEffect(() => {
        if (result && result.status === 201) {
            // console.log("퀴즈 저장 성공: ", result);
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

    return (
        <QuizMakeForm
            step="step3"
            form={data}
            isOpen={isOpen}
            handleClose={handleClose}
            onClick={onClick}
        />
    );
};

export default MakeQuizStep03;