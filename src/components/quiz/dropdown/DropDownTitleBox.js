import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { DropDownBtn, DropDownText } from "../../../styles/quiz/QuizSolveElements";

const DropDownTitleBox = ({ type, text, isOpen, onClick }) => {
    return (
        <>
        {
            type === 'input'
            ? (
                <DropDownBtn onClick={onClick}>
                    {text} 
                    {
                        isOpen 
                        ? <MdKeyboardArrowUp /> 
                        : <MdKeyboardArrowDown /> 
                    }
                </DropDownBtn>
            ) : (
                <DropDownText onClick={onClick}>
                    {text} 
                    {
                        isOpen 
                        ? <MdKeyboardArrowUp /> 
                        : <MdKeyboardArrowDown /> 
                    }
                </DropDownText>
            )
        }
        </>
    );
};

export default DropDownTitleBox;