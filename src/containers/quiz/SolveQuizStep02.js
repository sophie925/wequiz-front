import { MdOutlineCreate, MdLockOutline, MdLockOpen } from "react-icons/md";
import { TextField } from "../../../node_modules/@mui/material/index";
import { HintItem, SolveQuizContentWrap, SolveQuizHintWrap, SolveQuizProblem, SolveQuizStep02Block, SolveQuizTopText, SolveQuizTopWrap } from "../../styles/quiz/QuizElements";
import { ErrorText } from "../../styles/common/CommonElements";
import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import ModalForm from "../../components/common/ModalForm";
import Loading01 from "../../components/common/Loading01";
import ProgressBar from "../../components/common/ProgressBar";
import Timer from "../../components/quiz/Timer";
import AnswerConfirm from "../../components/quiz/AnswerConfirm";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { solveReset, viewNewQuizPaper, viewQuizPaper } from "../../modules/solve";
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
    const [minutes, setMinutes] = useState(parseInt(1));
    const [seconds, setSeconds] = useState(parseInt(0));
    const [isTimeOverrun, setIsTimeOverrun] = useState(false);
    const [locationData, setLocationData] = useState({});
    const [loading, setLoading] = useState(false);
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
    }, [location]);

    const { step, quizPaperId, title } = locationData;

    useEffect(() => {
        dispatch(solveReset());
        dispatch(hintReset());
        setLoading(true);
        // 퀴즈 조회 시 quizPaperId가 undefined인 오류에 대한 조치
        setTimeout(() => {
            if(quizPaperId) {
                if (step === "new") {
                    dispatch(viewNewQuizPaper(quizPaperId));
                } else {
                    dispatch(viewQuizPaper(quizPaperId));
                }
            }
        }, 500)
    }, [dispatch, step, quizPaperId]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("퀴즈 조회 성공!", form);
            setLoading(false);
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

    // 비회원일 경우 힌트 클릭 시 안내메세지용 모달
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const hintClick = (e, value) => {
        if (!token) { // 비회원인 경우
            handleOpen();
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
            // console.log("힌트 조회 성공!", form2);
            const { position } = hintData;
            const updateHint = {
                ...quiz.hints[position],
                hint: form2.data.data.hint,
                uncovered: true
            };
            const updateQuiz = {...quiz};
            updateQuiz.hints[position] = updateHint;
            dispatch(hintReset());
        }
    }, [form2, hintData, quiz, dispatch]);

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

    // 정답 인풋에 Enter 키 눌렀을 시
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        } 
    }

    // 정답확인 버튼 클릭 시
    const onClick = () => {
        const { quizId, answer, problem } = quiz;
        let flag = false;
        let updateAnswer = quiz;
        // 시간 내 답을 입력 못하면 오답 처리
        if (minutes === 0 && seconds === 0) {
            updateAnswer = { quizId, answer: ' ' };
            flag = true;
        }
        if (!flag && (answer === '' || answer === null)) {
            setErrorText("정답을 입력해주세요.");
            return;
        }
        if (currentIndex < form.data.data.length) {
            setTimeout(() => {
                setCurrentIndex(index => index + 1);
                setMinutes(parseInt(1));
                setSeconds(parseInt(0));
            }, 1300);
            dispatch(checkQuizAnswer(updateAnswer));
        }
        if (!token) { // 비회원인 경우
            setProblem(problem);
            setAnswer(answer);
        }
    };

    useEffect(() => {
        if (form3 && form3.status === 200) {
            // console.log("정답 확인 성공!", form3);
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
        setTimeout(() => {
            handleModalClose();
            setIsTimeOverrun(false);
        }, 1000);
        if (!isModalOpen && currentIndex === form?.data.data?.length) {
            // console.log("퀴즈결과보기 넘어가기 전:", form);
            navigate('/solveResult', {
                state: {
                    quizPaperId : quizPaperId,
                    title: title,
                    totalCount: form?.data.data?.length,
                    correctCount: correctCount,
                    quizList: (!token ? quizDataList : '')
                }
            });
        }
    }, [isModalOpen, currentIndex]);

    // 타이머 계산하는 로직
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    setIsTimeOverrun(true);
                    setQuiz({ ...quiz, answer: ' ' });
                    onClick();
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <>
        {loading ? <Loading01 /> : (
            <SolveQuizStep02Block>
                {quiz && (
                    <>
                        <ProgressBar length={form?.data.data?.length} index={currentIndex}/>
                        <SolveQuizTopWrap>
                            <SolveQuizTopText>
                                <MdOutlineCreate />
                                {form?.data.data?.length}문제 중 {currentIndex+1}번째
                            </SolveQuizTopText>
                            <Timer minutes={minutes} seconds={seconds} />
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
                                onKeyPress={onKeyPress}
                            />
                            <ErrorText isCheck={true}>{errorText}</ErrorText>
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
                {isOpen &&
                    <ModalForm isOpen={isOpen} title="안내 메세지">
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ marginBottom: '30px' }}>힌트는 로그인 후 이용가능합니다.</p>
                            <Button medium onClick={handleClose}>확인</Button>
                        </div>
                    </ModalForm>
                }
                {isModalOpen &&
                    <ModalForm isOpen={isModalOpen}>
                        <AnswerConfirm isCorrect={isCorrect} isTimeOverrun={isTimeOverrun}/>
                    </ModalForm>
                }
            </SolveQuizStep02Block>
        )}
        </>
    );
};

export default SolveQuizStep02;