import { Input } from "../../../styles/common/InputElements";

const InputBox = ({
    type,
    name,
    value,
    min,
    max,
    placeholder,
    onChange,
    disabled
}) => {
    return (
        <Input
            type={type}
            name={name}
            value={value}
            min={min}
            max={max}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default InputBox;