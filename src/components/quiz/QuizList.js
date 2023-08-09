import { MdBookmarkBorder, MdBookmark, MdDone } from "react-icons/md";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { LikeActiveBtn, LikeActiveNum, LikeBtnWrap, QuizListBlock, QuizItemExplain, QuizItemTitle, QuizItemTitleWrap, QuizItemExplain2, IconBlock, ShareBtn, IconBtnWrap, QuizItem } from "./QuizListElements";

const categoryMap = {
    GENERAL_KNOWLEDGE: '일반상식',
    MUSIC: '음악',
    MOVIE: '영화',
    TV_SHOW: '드라마/예능',
    HISTORY: '역사',
    SCIENCE: '과학',
    ENTERTAINMENT: '오락',
    ART: '예술',
    SOCIAL: '사회',
    LIVING: '생활/삶',
    ETC: '기타'
};

const QuizList = ({ type, form, onClickShare, onClickBookmark, onClickLikeMark, onClick }) => {
    const token = localStorage.getItem('user');
    return(
        <QuizListBlock>
        {form && form.map((value, index) => (
            <QuizItem key={index} isState={value?.solvingStatus?.toLowerCase()}>
                <QuizItemTitleWrap>
                    <QuizItemTitle onClick={()=> onClick(index, value)}>
                        {value?.solvingStatus === "COMPLETED" ? <MdDone /> : ''}
                        {value?.title}
                    </QuizItemTitle>
                    <IconBlock>
                        {token && type !== "mine" && (
                            <IconBtnWrap
                                marked={value?.bookmarked}
                                onClick={() => onClickBookmark(index, value)}
                            >
                                {value?.bookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
                            </IconBtnWrap>
                        )}
                        <IconBtnWrap onClick={() => onClickShare(value)}>
                            <ShareBtn />
                        </IconBtnWrap>
                    </IconBlock>
                </QuizItemTitleWrap>
                <QuizItemExplain>{value?.description}</QuizItemExplain>
                <QuizItemExplain2>
                    {categoryMap[value?.category]} <BsDot />
                    {value?.quizzes ? value.quizzes.length : value?.quizCount}문제
                </QuizItemExplain2>
                {!token || type === "mine" ? (
                    <LikeBtnWrap>
                        <LikeActiveBtn>
                            <RiHeart3Line />
                            <LikeActiveNum isShow="true">{value?.likeCount}</LikeActiveNum>
                        </LikeActiveBtn>
                    </LikeBtnWrap>
                ) : (
                    <LikeBtnWrap
                        marked={value?.likeMarked}
                        onClick={() => onClickLikeMark(index, value)}
                    >
                        <LikeActiveBtn>
                            {value?.likeMarked ? <RiHeart3Fill /> : <RiHeart3Line />}
                            <LikeActiveNum isShow={value?.likeCount !== 0}>{value?.likeCount}</LikeActiveNum>
                        </LikeActiveBtn>
                    </LikeBtnWrap>
                )}
            </QuizItem>
        ))}
        </QuizListBlock>
    );
};

export default QuizList;