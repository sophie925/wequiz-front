import { MdOutlineCreate, MdLockOutline, MdLockOpen } from "react-icons/md";
import { TextField } from "../../../node_modules/@mui/material/index";
import { ErrorText, HintItem, SolveQuizContentWrap, SolveQuizHintWrap, SolveQuizProblem, SolveQuizStep02Block, SolveQuizTopText, SolveQuizTopWrap } from "../../components/quiz/QuizElements";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import ModalForm from "../../components/common/ModalForm";
import ProgressBar from "../../components/quiz/ProgressBar";
import Timer from "../../components/quiz/Timer";
import AnswerConfirm from "../../components/quiz/AnswerConfirm";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewNewQuizPaper, viewQuizPaper } from "../../modules/solve";
import { checkQuizAnswer } from "../../modules/answer";
import { hintReset, viewHint } from "../../modules/hint";

const SolveQuizStep02 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { form } = useSelector(({ solve }) => ({
        form: solve.status,
    }));
    const { form2 } = useSelector(({ hint }) => ({
        form2: hint.status,
    }));
    const { form3 } = useSelector(({ answer }) => ({
        form3: answer.status,
    }));

    const [quiz, setQuiz] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorText, setErrorText] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [hintData, setHintData] = useState({});
    const [flag, setFlag] = useState(true);
    const [answer, setAnswer] = useState('');
    const [problem, setProblem] = useState('');
    const [quizDataList, setQuizDataList] = useState([]);
    const [locationData, setLocationData] = useState({});
    const token = localStorage.getItem('user');

    // 공유하기로 접근할 경우 search, 일반적인 경우 state로 진입
    useEffect(() => {
        if (location.search) {
            // URL에서 데이터 추출
            const searchParams = new URLSearchParams(location.search);
            const encodedData = searchParams.get("data");
            if (encodedData) {
                // 추출한 데이터를 JSON 형식으로 변환
                const decodedData = decodeURIComponent(encodedData);
                const data = JSON.parse(decodedData);
                
                setLocationData(data);
            }
        } else {
            setLocationData(location?.state);
        }
    }, [location.search]);

    const { step, quizPaperId, title } = locationData;

    useEffect(() => {
        dispatch(hintReset());
        if (step === "new") {
            console.log("새로운 퀴즈");
            dispatch(viewNewQuizPaper(quizPaperId));
        } else {
            console.log("풀던 퀴즈");
            dispatch(viewQuizPaper(quizPaperId));
        }
    }, [dispatch, step, quizPaperId]);

    useEffect(() => {
        if (form && form.status === 200) {
            console.log("퀴즈 조회 성공!", form);
            if (currentIndex < form.data.data.length) {
                const quizDataList = form.data.data;
                if (flag && step === "started") {
                    const findIndex = quizDataList.map((value, index) => {
                        if (value.status === "UNSOLVED") return index;
                        return undefined;
                    }).findIndex((v) => v !== undefined);
                    setCurrentIndex(findIndex);
                    setQuiz(quizDataList[findIndex]);
                    setFlag(false);
                } else {
                    setQuiz(quizDataList[currentIndex]);
                }
            }
        }
    }, [form, flag, step, currentIndex]);

    // 힌트 사용시 메세지 관련 이벤트
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);
    
    const hintClick = (e, value) => {
        if (!token) { // 비회원인 경우
            alert("힌트는 회원만 이용가능합니다.");
            return;
        }
        const { innerText } = e.target;
        const { id, position } = value;
        setHintData({
            ...hintData, 
            id: id,
            position: position,
            innerText: innerText
        });
        handleDialogOpen();
    };

    const onAfterClick = e => {
        const { id } = hintData;
        dispatch(viewHint(id));
        handleDialogClose();
    };

    useEffect(() => {
        if (form2 && form2.status === 200) {
            console.log("힌트 조회 성공!", form2);
            const updateHint = {
                ...quiz.hints[hintData.position],
                hint:form2.data.data.hint,
                uncovered: true
            };
            const updateQuiz = {...quiz};
            updateQuiz.hints[hintData.position] = updateHint;
            console.log(updateHint, updateQuiz);
            dispatch(hintReset());
        }
    }, [form2, dispatch]);

    // 정답 확인용 메세지 관련 이벤트
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const onChange = e => {
        const { name, value } = e.target;
        if (value !== '') {
            setErrorText("");
        }
        setQuiz({
            ...quiz,
            [name]: value
        });
    };

    const onClick = () => {
        const { quizId, answer } = quiz;
        if (quiz.answer === '' || quiz.answer === null) {
            setErrorText("정답을 입력해주세요.");
            return;
        }
        if (currentIndex <= form.data.data.length-1) {
            setCurrentIndex(index => index + 1);
            dispatch(checkQuizAnswer({quizId, answer}));
        }
        if (!token) { // 비회원인 경우
            setProblem(quiz.problem);
            setAnswer(quiz.answer);
        }
    };

    useEffect(() => {
        if (form3 && form3.status === 200) {
            console.log("정답 확인 성공!", form3);
            const chkCorrect = form3.data.data.correct;
            if (!token) { // 비회원인 경우
                const updatedList = [...quizDataList];
                const updatedQuizData = {
                    answer: chkCorrect ? answer: '',
                    hints: [],
                    problem: problem,
                    quizPaperId : quizPaperId,
                    status: chkCorrect ? 'SOLVED' : 'WRONG',
                };
                updatedList.push(updatedQuizData)
                setQuizDataList(updatedList);
            }
            if (chkCorrect) {
                setCorrectCount(count => count + 1);
            }
            setIsCorrect(chkCorrect);
            handleModalOpen();
        }
    }, [form3]);
    
    useEffect(() => {
        setTimeout(() => handleModalClose(), 1000);
        if (!isModalOpen && currentIndex === form?.data.data?.length) {
            console.log("퀴즈결과보기 넘어가기 전:", form);
            navigate('/solveStep3', {
                state: {
                    quizPaperId : quizPaperId,
                    title: title,
                    totalCount: form?.data.data?.length,
                    correctCount: correctCount,
                    quizList: (!token ? quizDataList : '')
                }
            });
        }
    }, [isModalOpen]);

    return (
        <SolveQuizStep02Block>
            {quiz && (
                <>
                    <ProgressBar length={form?.data.data?.length} index={currentIndex}/>
                    <SolveQuizTopWrap>
                        <SolveQuizTopText>
                            <MdOutlineCreate />
                            {form?.data.data?.length}문제 중 {currentIndex+1}번째
                        </SolveQuizTopText>
                        <Timer mm="2" ss="0" />
                    </SolveQuizTopWrap>
                    <SolveQuizContentWrap>
                        <SolveQuizProblem>{quiz?.problem}</SolveQuizProblem>
                        <TextField
                            fullWidth
                            name="answer"
                            label="정 답"
                            value={quiz?.answer ?? ''}
                            InputLabelProps={{ shrink: true }}
                            variant="standard" 
                            onChange={onChange}
                        />
                        <ErrorText>{errorText}</ErrorText>
                    </SolveQuizContentWrap>
                    <SolveQuizHintWrap>
                        {quiz?.hints && quiz?.hints.map((hint, index) => (
                            <HintItem
                                key={index}
                                isShow={hint.uncovered}
                                onClick={e => hintClick(e, hint)}
                            >
                                {hint.uncovered ? hint.hint : `힌트${hint.position+1}`}
                                {hint.uncovered ? <MdLockOpen/> : <MdLockOutline />}
                            </HintItem>
                        ))}
                    </SolveQuizHintWrap>
                    <Button fullwidth indigo onClick={onClick}>
                        {form && currentIndex === form.data.data.length-1 ? (
                            <>최 종 확 인<br/><span>(결과화면 이동)</span></>
                        ) : (
                            <>정 답 확 인<br/><span>(다음문제 이동)</span></>
                        )}
                    </Button>
                </>
            )}
            {isDialogOpen && 
                <Dialog isOpen={isDialogOpen}
                    title={`${hintData.innerText}을(를) 보시겠습니까?`}
                    before={{ onClick: handleDialogClose }}
                    after={{ onClick: onAfterClick }}
                >
                    힌트를 보시면 포인트가 차감됩니다.
                </Dialog>
            }
            {isModalOpen &&
                <ModalForm isOpen={isModalOpen}>
                    <AnswerConfirm isCorrect={isCorrect}/>
                </ModalForm>
            }
        </SolveQuizStep02Block>
    );
};

export default SolveQuizStep02;