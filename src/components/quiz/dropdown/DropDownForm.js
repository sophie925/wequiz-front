import { MdOutlineHorizontalRule } from "react-icons/md";
import { StateCheckIcon, DropDownFormBlock, StateRunningIcon, StateItem, CategoryBoxItem } from "../../../styles/quiz/QuizSolveElements";
import DropDownItemBox from "./DropDownItemBox";

const DropDownForm = ({ 
    isStateOpen, 
    isCategoryOpen, 
    categories, 
    checkList, 
    onClickDropDown, 
    onClickBoxItem 
}) => {
    return (
        <DropDownFormBlock>
            <DropDownItemBox
                type="input"
                text="상태"
                isOpen={isStateOpen}
                isCate={false}
                onClickDropDown={() => onClickDropDown("state")}
            >
                <StateItem id="NONE" onClick={e => onClickBoxItem("state", e)}>
                    <MdOutlineHorizontalRule /> 안 푼 퀴즈 
                </StateItem>
                <StateItem id="COMPLETED" onClick={e => onClickBoxItem("state", e)}>
                    <StateCheckIcon /> 푼 퀴즈 
                </StateItem>
                <StateItem id="STARTED" onClick={e => onClickBoxItem("state", e)}>
                    <StateRunningIcon /> 진행중 퀴즈 
                </StateItem>
            </DropDownItemBox>
            <DropDownItemBox
                type="input"
                text="카테고리"
                isOpen={isCategoryOpen}
                isCate={true}
                onClickDropDown={() => onClickDropDown("category")}
            >
                {categories && categories.map((value, index) => (
                    <CategoryBoxItem
                        key={index}
                        isCheck={checkList[index]}
                        onClick={() => onClickBoxItem("category", value)}
                    >
                        {value.categoryDisplay}
                    </CategoryBoxItem>
                ))}
            </DropDownItemBox>
        </DropDownFormBlock>
    );
};

export default DropDownForm;