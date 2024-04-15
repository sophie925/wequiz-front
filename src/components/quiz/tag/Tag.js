import { TagBlock } from "../../../styles/quiz/QuizSolveElements";
import TagBox from "./TagBox";

const Tag = ({ tagList, deleteTagItem }) => {
    return (
        <TagBlock>
            {tagList && <TagBox tags={tagList} onClick={deleteTagItem} />}
        </TagBlock>
    );
};

export default Tag;