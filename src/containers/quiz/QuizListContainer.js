import QuizListForm from "../../components/quiz/QuizListForm";
import Dialog from "../../components/common/Dialog";
import ModalForm from "../../components/common/ModalForm";
import ShareKaKaoForm from "./ShareKakaoForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkReset, setBookmark } from "../../modules/bookmark";
import { likeMarkReset, setLikeMark } from "../../modules/likeMark";

const QuizListContainer = ({ type, form }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { result } = useSelector(({ bookmark }) => ({
        result: bookmark.status
    }));
    const { result2 } = useSelector(({ likeMark }) => ({
        result2: likeMark.status
    }));
    const [quizData, setQuizData] = useState([]);
    const [quizId, setQuizId] = useState("");
    const [quizTitle, setQuizTitle] = useState("");
    const [markedIndexInfo, setMarkedIndexInfo] = useState({
        index: 0,
        state: ''
    });
    const [shareData, setShareData] = useState({});

    // 내 퀴즈 목록 - 퀴즈 확인안내용 팝업
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);

    // 진행중인 문제일 경우 띄워주는 팝업
    const [isStartedOpen, setIsStartedOpen] = useState(false);
    const handleStartedOpen = () => setIsStartedOpen(true);
    const handleStartedClose = () => setIsStartedOpen(false);

    // 다 푼 문제일 경우 띄워주는 팝업
    const [isCompletedOpen, setIsCompletedOpen] = useState(false);
    const handleCompletedOpen = () => setIsCompletedOpen(true);
    const handleCompletedClose = () => setIsCompletedOpen(false);

    // 퀴즈 클릭 시
    const onQuizClick = (index, value) => {
        if (type === "mine") {
            handleDialogOpen();
            setQuizData(form[index]);
        } else {
            const {quizPaperId, title, solvingStatus} = value;
            setQuizId(quizPaperId);
            setQuizTitle(title);
            if (solvingStatus === "STARTED") {
                handleStartedOpen();
                setIsCompletedOpen(false);
            } else if(solvingStatus === "COMPLETED") {
                handleCompletedOpen();
                setIsStartedOpen(false);
            } else {
                navigate('/solveStep2', {
                    state: {
                        quizPaperId: quizPaperId,
                        title: title
                    }
                });
            }
        }
    };

    // 내 퀴즈 목록 뒤 쪽 버튼 클릭 시 - 확인
    const onClickAfter =  () => {
        navigate('/detail', {
            state : {
                form: quizData
            }
        });
    };

    // 앞 쪽 버튼 클릭 시 - 다시 시작
    const onClickBefore = e => {
        navigate('/solveStep2', {
            state: {
                step: "new",
                quizPaperId: quizId,
                title: quizTitle
            }
        });
        handleStartedClose();
        handleCompletedClose();
    };

    // 진행중 퀴즈의 뒤 쪽 버튼 클릭 시 - 계속 진행
    const onClickStartedAfter = e => {
        navigate('/solveStep2', {
            state: {
                step: "started",
                quizPaperId: quizId,
                title: quizTitle
            }
        });
        handleStartedClose();
    };

    // 진행중 퀴즈의 뒤 쪽 버튼 클릭 시 - 결과화면 이동
    const onClickCompletedAfter = e => {
        navigate('/solveCheckAnswer', {
            state: {
                quizPaperId: quizId,
                title: quizTitle
            }
        });
        handleCompletedClose();
    };

    // 북마크 아이콘 클릭 시
    const onClickBookmark = (index, value) => {
        const { quizPaperId, solvingStatus } = value;
        const bookmarkData = {
            index: index,
            state: solvingStatus
        }
        setMarkedIndexInfo(bookmarkData);
        dispatch(setBookmark(quizPaperId));
    };

    // 북마크 설정/해제 api 수행 후 로직
    useEffect(() => {
        if (result && result.status === 200) {
            console.log("북마크 성공", result);
            const { bookmarked } = result.data.data;
            const { index } = markedIndexInfo;
            const updatedData = { ...form };
            updatedData[index].bookmarked = bookmarked;
            setMarkedIndexInfo({ index: 0, state: '' })
            dispatch(bookmarkReset());
        }
    }, [result, dispatch, markedIndexInfo, form]);

    // 좋아요 아이콘 클릭 시
    const onClickLikeMark = (index, value) => {
        const { quizPaperId, solvingStatus } = value;
        const likeMarkData = {
            index: index,
            state: solvingStatus
        }
        setMarkedIndexInfo(likeMarkData);
        dispatch(setLikeMark(quizPaperId));
    };

    // 좋아요 설정/해제 api 수행 후 로직
    useEffect(() => {
        if (result2 && result2.status === 200) {
            console.log("좋아요 성공", result2);
            const { likeMarked } = result2.data.data;
            const { index } = markedIndexInfo;
            const updatedData = { ...form };
            const currCount = updatedData[index].likeCount;
            updatedData[index].likeMarked = likeMarked;
            updatedData[index].likeCount = likeMarked ? currCount + 1 : (currCount - 1 > 0 ? currCount - 1 : 0);
            setMarkedIndexInfo({ index: 0, state: '' })
            dispatch(likeMarkReset());
        }
    }, [result2, dispatch, form, markedIndexInfo]);

    const [isShareOpen, setIsShareOpen] = useState(false);
    const handleShareOpen = () => setIsShareOpen(true)
    const handleShareClose = () => setIsShareOpen(false);

    const onClickShare = value => {
        handleShareOpen();
        const { quizPaperId, title } = value;
        const updateShareData = {
            quizPaperId: quizPaperId,
            title: title
        };
        setShareData(updateShareData);
    };

    return (
        <>
            <QuizListForm
                type={type}
                form={form}
                onClickShare={onClickShare}
                onClickBookmark={onClickBookmark}
                onClickLikeMark={onClickLikeMark}
                onClick={onQuizClick}
            />
            {isDialogOpen && 
                <Dialog isOpen={isDialogOpen}
                    title="퀴즈를 확인하시겠습니까?"
                    before={{ onClick: handleDialogClose }}
                    after={{ onClick: onClickAfter }}
                >
                </Dialog>
            }
            {isStartedOpen && 
                <Dialog isOpen={isStartedOpen} onClose={handleStartedClose}
                    title="이어서 진행하시겠습니까?"
                    before={{ text: "다시 시작", onClick: onClickBefore }}
                    after={{ text: "계속 진행", onClick: onClickStartedAfter }}
                >
                    처음부터 하시려면 '다시 시작'을 선택하세요.
                </Dialog>
            }
            {isCompletedOpen && 
                <Dialog isOpen={isCompletedOpen} onClose={handleCompletedClose}
                    title="풀었던 문제입니다."
                    before={{ text: "다시 시작", onClick: onClickBefore }}
                    after={{ text: "결과화면 이동", onClick: onClickCompletedAfter }}
                >
                    처음부터 하시려면 '다시 시작'을 선택하세요.
                </Dialog>
            }
            {isShareOpen && (
                <ModalForm isOpen={isShareOpen} title="공유하기" onClose={handleShareClose}>
                    <ShareKaKaoForm data={shareData} />
                </ModalForm>
            )}
        </>
    );
};

export default QuizListContainer;