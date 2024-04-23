import Button from "../../components/common/Button";
import Dialog from "../../components/common/Dialog";
import ModalForm from "../../components/common/ModalForm";
import Loading01 from "../../components/common/Loading01";
import QuizSolveForm from "../../components/quiz/solve/QuizSolveForm";
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
    
    const [loading, setLoading] = useState(false);

    const [quiz, setQuiz] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorText, setErrorText] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [hintData, setHintData] = useState({});
    const [flag, setFlag] = useState(true);
    const [answer, setAnswer] = useState('');
    const [problem, setProblem] = useState('');
    
    const [isTimeOverrun, setIsTimeOverrun] = useState(false); // 타임오버시 체크값
    const [checkTime, setCheckTime] = useState(false); // 시간 초기화 체크값
    
    // 비회원용
    const [locationData, setLocationData] = useState({});
    const [quizDataList, setQuizDataList] = useState([]);
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

    // 퀴즈 조회 api 수행 후 로직
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

    // 힌트 조회 api 수행 후 로직
    useEffect(() => {
        if (form2 && form2.status === 200) {
            // console.log("힌트 조회 성공!", form2);
            const { position } = hintData;
            const updateHint = {
                ...quiz.hints[position],
                hint: form2.data.data.hint,
                uncovered: true
            };
            const updateQuiz = { ...quiz };
            updateQuiz.hints[position] = updateHint;
            dispatch(hintReset());
        }
    }, [form2, hintData, quiz, dispatch]);

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
            onClickAnswer();
        } 
    }

    // 정답확인 버튼 클릭 시
    const onClickAnswer = () => {
        const { quizId, answer, problem } = quiz;
        let updateAnswer = quiz;
        // 시간 내 답을 입력 못하면 오답 처리
        if (isTimeOverrun) {
            updateAnswer = {
                quizId,
                answer: ' '
            };
        } else {
            if (answer === '' || answer === null) {
                setErrorText("정답을 입력해주세요.");
                return;
            }
        }
        if (currentIndex < form.data.data.length) {
            setTimeout(() => {
                setCurrentIndex(index => index + 1);
            }, 1300);
            dispatch(checkQuizAnswer(updateAnswer));
        }
        if (!token) { // 비회원인 경우
            setProblem(problem);
            setAnswer(answer);
        }
    };

    // 정답 확인용 메세지 관련 이벤트
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    // 정답 확인 api 수행 후 로직
    useEffect(() => {
        if (form3 && form3.status === 200) {
            // console.log("정답 확인 성공!", form3);
            const chkCorrect = form3.data.data.correct;
            if (!token) { // 비회원인 경우
                const updatedList = [ ...quizDataList ];
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
            setCheckTime(true);
            handleModalOpen();
        }
    }, [form3]);
    
    useEffect(() => {
        setTimeout(() => {
            setErrorText('');
            handleModalClose();
            setCheckTime(false);
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
    }, [isModalOpen, currentIndex, quizPaperId, title, correctCount, token, quizDataList]);
    
    // 퀴즈 시간초과 된 경우
    useEffect(() => {
        if (isTimeOverrun) {
            setIsTimeOverrun(true);
            setQuiz({
                ...quiz,
                answer: ' '
            });
            onClickAnswer();
        }
    }, [isTimeOverrun]);

    return (
        <>
        {
            loading
            ? <Loading01 />
            : (
                <QuizSolveForm
                    form={form}
                    quiz={quiz}
                    quizLength={form?.data.data?.length}
                    currentIndex={currentIndex}
                    checkTime={checkTime}
                    setIsTimeOverrun={setIsTimeOverrun}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    errorText={errorText}
                    hintClick={hintClick}
                    onClick={onClickAnswer}
                />
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
        </>
    );
};

export default SolveQuizStep02;