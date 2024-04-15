import { DropDownContent, DropDownItem } from "../../../styles/quiz/QuizSolveElements";
import DropDownTitleBox from "./DropDownTitleBox";

const DropDownItemBox = ( props ) => {
    return (
        <DropDownItem>
            <DropDownTitleBox
                type={props.type}
                text={props.text}
                isOpen={props.isOpen}
                onClick={props.onClickDropDown}
            />
            <DropDownContent
                isShow={props.isOpen}
                isCate={props.isCate}
                isSort={props.isSort}
            >
                {props.children}
            </DropDownContent>
        </DropDownItem>
    );
};

export default DropDownItemBox;