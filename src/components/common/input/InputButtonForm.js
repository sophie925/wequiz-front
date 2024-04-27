import { InputBoxLabel, InputBoxWrap, InputButtonWrap } from "../../../styles/common/InputElements";
import InputBox from "./InputBox";
import StyledButton from "../../common/Button";

const InputButtonForm = ({
    title,
    type,
    name,
    value,
    placeholder,
    onChange,
    require,
    disabled,
    onClick,
    buttonText
}) => {
    return (
        <InputBoxWrap>
            <InputBoxLabel>{title}{require && '*'}</InputBoxLabel>
            <InputButtonWrap>
                <InputBox
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    require={require}
                    disabled={disabled}
                />
                <StyledButton onClick={onClick}>{buttonText}</StyledButton>
            </InputButtonWrap>
        </InputBoxWrap>
    );
};

export default InputButtonForm;