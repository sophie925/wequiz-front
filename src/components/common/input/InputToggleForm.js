import { InputBothWrap, InputBoxLabel, InputBoxWrap } from "../../../styles/common/InputElements";
import InputForm from "./InputForm";
import InputToggle from "./InputToggle";

const InputToggleForm = ({
    title1,
    type,
    name1,
    value1,
    onChange1,
    require,
    min,
    max,
    title2,
    name2,
    value2,
    onChange2,
    toggle
}) => {
    return (
        <InputBothWrap>
            <InputForm
                title={title1}
                type={type}
                name={name1}
                value={value1}
                onChange={onChange1}
                require={require}
                min={min}
                max={max}
            />
            <InputBoxWrap>
                <InputBoxLabel>{title2}{require && '*'}</InputBoxLabel>
                <InputToggle
                    name={name2}
                    value={value2}
                    onChange={onChange2}
                    toggle={toggle}
                />
            </InputBoxWrap>
        </InputBothWrap>
    );
};

export default InputToggleForm;