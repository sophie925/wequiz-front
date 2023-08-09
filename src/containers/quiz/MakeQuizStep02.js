import QuizForm from "../../components/quiz/QuizForm";
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../modules/quiz";

const MakeQuizStep02 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector(({ quiz }) => ({
        data: quiz.make
    }));
    const count = data.quizCount;
    const initalItems = Array.from({ length: count }, (_, index) => index === 0? false: true);
    const [currentNumber, setCurrentNumber] = useState(1); // 현재 진행중인 문제
    const [selectNumber, setSelectNumber] = useState(1); // 현재 선택된 문제
    const [buttonsDisabled, setButtonsDisableds] = useState(initalItems);
    const [quizData, setQuizData] = useState([]);
    const [inputs, setInputs] = useState({
        answer: '',
        hints: [],
    });
    const { answer, hints } = inputs;

    const onChange = (e, index) => {
        const { name, value } = e.target;
        console.log(name, ":", value);
        if (name === "answer") {
            setInputs({
                ...inputs,
                [name]: value
            });
        } else {
            const newHints = [...inputs.hints];
            newHints[index] = value;
            setInputs({
                ...inputs,
                [name]: newHints.length > 0 ? newHints.filter(hint => hint !== '') : newHints,
            });
        }
    };

    const onReset = () => {
        setInputs({
            answer: '',
            hints: [],
        });
    };

    // 이전화면으로 이동 시
    const onPrevClickHandle = () => {
        navigate('/make');
    };

    // 다음문제 버튼 클릭
    const onClickNextQuiz = useCallback(e => {
        if (selectNumber === currentNumber) {
            if (quizData[selectNumber-1]) {
                setInputs(quizData[selectNumber-1]);
            }
            if (answer === '' || hints.length < 3) {
                alert("퀴즈정답과 힌트를 모두 입력해주세요.");
                // 입력값 있을땐 값 유지
                setInputs({ answer, hints });
                return;
            }
            setQuizData([...quizData, inputs]);
            // 퀴즈 전부 작성되었는지 확인
            const isCheck = buttonsDisabled.every((isDisabled) => isDisabled === false);
            if (isCheck) {
                handleDialogOpen();
                return;
            }
            if (currentNumber < count){
                setSelectNumber(selectNumber => selectNumber + 1);
                setCurrentNumber(currentNumber => currentNumber + 1);
                const updatedButtonsDisabled = [...buttonsDisabled];
                updatedButtonsDisabled[quizData.length+1] = !updatedButtonsDisabled[quizData.length+1];
                setButtonsDisableds(updatedButtonsDisabled);
                // 초기화
                onReset();
            }
        } else {
            if (quizData[selectNumber]) {
                setInputs(quizData[selectNumber]);
            } else {
                // 초기화
                onReset();
            }
            setSelectNumber(selectNumber => selectNumber + 1);
        }
    }, [inputs]);

    // 문제번호 버튼 클릭
    const onClickQuizNumberButton = index => {
        setSelectNumber(index+1);
        onReset();
        if (quizData[index]) {
            setInputs(quizData[index]);
        }
    };
    
    // 퀴즈 완성 전 확인메세지용 모달
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);
    const onAfterClick = () => {
        if(!data.quizzes) {
            const newData = {
                ...data,
                quizzes: quizData
            };
            dispatch(updateData({ form:'make', data: newData }));
        }
        navigate('/makeStep3');
        handleDialogClose();
    };
    
    return (
        <QuizForm
            step="step2"
            form={inputs}
            quizCount={buttonsDisabled}
            currentNumber={currentNumber}
            selectNumber={selectNumber}
            onChange={onChange}
            onClickQuizNumberButton={onClickQuizNumberButton}
            isDialogOpen={isDialogOpen}
            isDialogClick={[handleDialogClose, onAfterClick]}
            onClickNextQuiz={onClickNextQuiz}
            onClick={onPrevClickHandle}
        />
    );
};

export default MakeQuizStep02;