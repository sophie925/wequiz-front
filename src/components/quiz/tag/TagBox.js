import { TagItemBox, TagButton, TagItem, TagText } from "../../../styles/quiz/TagElements";

const TagBox = ({ tags, onClick }) => {
    return (
        <TagItemBox>
            {tags && tags.map((tagItem, index) => (
                <TagItem key={index}>
                    <TagText>{tagItem}</TagText>
                    <TagButton onClick={onClick}>X</TagButton>
                </TagItem>
            ))}
        </TagItemBox>
    );
};

export default TagBox;