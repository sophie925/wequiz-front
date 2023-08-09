import styled from "styled-components";
import oc from "open-color";

const TagBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const TagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px;
    padding: 5px;
    background-color: ${oc.indigo[8]};
    border-radius: 5px;
`;

const TagText = styled.span`
    color: white;
    font-size: 13px;
    cursor: default;
`;

const TagButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-left: 3px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

const Tag = ({ tags, onClick }) => {
    return (
        <TagBox>
            {tags && tags.map((tagItem, index) => (
                <TagItem key={index}>
                    <TagText>{tagItem}</TagText>
                    <TagButton onClick={onClick}>X</TagButton>
                </TagItem>
            ))}
        </TagBox>
    );
};

export default Tag;