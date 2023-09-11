import QuizForm from "../../components/quiz/QuizForm";
import { checkAnswer } from "../../utils/CheckValidation";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateData } from "../../modules/quiz";

const MakeQuizStep02 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector(({ quiz }) => ({
        data: quiz.make
    }));
    const count = data.quizCount;
    const initalItems = Array.from({ length: count }, (_, index) => index === 0 ? false: true);
    const [buttonsDisabled, setButtonsDisableds] = useState(initalItems);
    const [currentNumber, setCurrentNumber] = useState(1); // 현재 진행중인 문제
    const [selectNumber, setSelectNumber] = useState(1); // 현재 선택된 문제
    const [errorText, setErrorText] = useState("");
    const [quizData, setQuizData] = useState([]);
    const [inputs, setInputs] = useState({
        answer: '',
        hints: [],
    });
    const { answer, hints } = inputs;

    const onReset = () => setInputs({ answer: '', hints: [] });

    const onChange = (e, index) => {
        const { name, value } = e.target;
        setErrorText("");
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

    // 다음문제 버튼 클릭
    const onClick = useCallback(e => {
        // 현재 작성중인 퀴즈일 경우
        if (selectNumber === currentNumber) {
            if (quizData[selectNumber-1]) {
                setInputs(quizData[selectNumber-1]);
            }
            if (answer === '' || hints.length < 3) {
                setErrorText("퀴즈 정답과 힌트를 모두 입력해주세요.");
                // 입력값 있을땐 값 유지
                setInputs({ answer, hints });
                return;
            }
            if (!checkAnswer(answer)) {
                setErrorText("정답은 반드시 한글(띄어쓰기 포함)로 입력되어야 합니다.");
                return;
            }
            setQuizData([...quizData, inputs]);
            dispatch(updateData({
                form:'make',
                data: {
                    ...data,
                    quizzes: [...quizData, inputs]
                }
            }));
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
        }
        // 이미 작성된 퀴즈일 경우(현재 번호와 다름)
        else {
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
        navigate('/makeStep3');
        handleDialogClose();
    };
    
    return (
        <QuizForm
            step="step2"
            form={inputs}
            data={data}
            quizCount={buttonsDisabled}
            currentNumber={currentNumber}
            selectNumber={selectNumber}
            errorText={errorText}
            onChange={onChange}
            onClickQuizNumberButton={onClickQuizNumberButton}
            isDialogOpen={isDialogOpen}
            isDialogClick={[handleDialogClose, onAfterClick]}
            onClick={onClick}
        />
    );
};

export default MakeQuizStep02;