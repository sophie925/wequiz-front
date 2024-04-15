import { LoadingWrap, QuizListTitleBlock, QuizListWrap, SelectIcon, SortItem } from "../../styles/quiz/QuizSolveElements";
import QuizListContainer from "../../containers/quiz/QuizListContainer";
import Loading02 from "../common/Loading02";
import DropDownItemBox from "./dropdown/DropDownItemBox";

const sortMap = {
    RECENCY : '최신순',
    POPULARITY: '인기순'
};

const QuizSolveForm = ({ 
    pagination, 
    sort, 
    isShow,
    quizData, 
    loading, 
    pageEnd, 
    onClickDropDown, 
    onClickBoxItem 
}) => {
    return (
        <QuizListWrap>
            <QuizListTitleBlock>
                <h3>{pagination?.totalCount}개 퀴즈</h3>
                <DropDownItemBox
                    text={sortMap[sort]}
                    isOpen={isShow}
                    isSort={true}
                    onClickDropDown={onClickDropDown}
                >
                    <SortItem id="RECENCY" onClick={e => onClickBoxItem("sort", e)}>
                        최신순 {sort === "RECENCY" ? <SelectIcon /> : ''}
                    </SortItem>
                    <SortItem id="POPULARITY" onClick={e => onClickBoxItem("sort", e)}>
                        인기순 {sort === "POPULARITY" ? <SelectIcon /> : ''}
                    </SortItem>
                </DropDownItemBox>
            </QuizListTitleBlock>
            <QuizListContainer
                type="solve"
                form={quizData}
            />
            {loading && (
                <LoadingWrap ref={pageEnd}>
                    <Loading02 />
                </LoadingWrap>
            )}
        </QuizListWrap>
    );
};

export default QuizSolveForm;