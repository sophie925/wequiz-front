import { TagBlock } from "../../../styles/quiz/TagElements";
import TagBox from "./TagBox";

const Tag = ({ tagList, deleteTagItem }) => {
    return (
        <TagBlock>
            {tagList && <TagBox tags={tagList} onClick={deleteTagItem} />}
        </TagBlock>
    );
};

export default Tag;