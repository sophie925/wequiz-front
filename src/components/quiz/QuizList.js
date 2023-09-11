import { MdBookmarkBorder, MdBookmark, MdDone } from "react-icons/md";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { LikeActiveBtn, LikeActiveNum, LikeBtnWrap, QuizListBlock, QuizItemExplain, QuizItemTitle, QuizItemTitleWrap, QuizItemExplain2, IconBlock, ShareBtn, IconBtnWrap, QuizItem } from "../../styles/quiz/QuizListElements";
import { categoryMap } from "../../utils/QuizUtil";


const QuizList = ({ type, form, onClickShare, onClickBookmark, onClickLikeMark, onClick }) => {
    const token = localStorage.getItem('user');
    return(
        <QuizListBlock>
        {form && form.map((value, index) => (
            <QuizItem key={index} isState={value?.solvingStatus?.toLowerCase()}
                    onClick={() => onClick(index, value)}>
                <QuizItemTitleWrap>
                    <QuizItemTitle>
                        {value?.solvingStatus === "COMPLETED" ? <MdDone /> : ''}
                        {value?.title}
                    </QuizItemTitle>
                    <IconBlock>
                        {token && type !== "mine" && (
                            <IconBtnWrap
                                marked={value?.bookmarked}
                                onClick={e => onClickBookmark(e, index, value)}
                            >
                                {value?.bookmarked ? <MdBookmark /> : <MdBookmarkBorder />}
                            </IconBtnWrap>
                        )}
                        <IconBtnWrap onClick={e => onClickShare(e, value)}>
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
                        onClick={e => onClickLikeMark(e, index, value)}
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