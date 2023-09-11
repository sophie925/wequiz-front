import { EmptyMessage } from "../../styles/quiz/QuizListElements";
import QuizList from "./QuizList";

const textMap = {
    home: '등록된 퀴즈가 없습니다.',
    solve: '해당 카테고리 관련 퀴즈가 없습니다.',
    mine: '나의 퀴즈가 없습니다.',
    bookmark: '내가 찜한 퀴즈가 없습니다.'
}

const QuizListForm = ({ type, form, onClickShare, onClickBookmark, onClickLikeMark, onClick }) => {
    return (
        <>
            {form && (
                form.length === 0 ? (
                    <EmptyMessage>{textMap[type]}</EmptyMessage>
                ):(
                    <QuizList
                        type={type}
                        form={form}
                        onClickShare={onClickShare}
                        onClickBookmark={onClickBookmark}
                        onClickLikeMark={onClickLikeMark}
                        onClick={onClick}
                    />
                )
            )}
        </>
    );
};

export default QuizListForm;