import { InputBoxLabel, InputBoxWrap } from "../../../styles/common/InputElements";
import InputBox from "./InputBox";

const InputForm = ({
    title,
    type,
    name,
    value,
    min,
    max,
    placeholder,
    onChange,
    require
}) => {
    return (
        <InputBoxWrap>
            <InputBoxLabel>{title}{require && '*'}</InputBoxLabel>
            <InputBox
                type={type}
                name={name}
                value={value}
                min={min}
                max={max}
                placeholder={placeholder}
                onChange={onChange}
                require={require}
            />
        </InputBoxWrap>
    );
};

export default InputForm;