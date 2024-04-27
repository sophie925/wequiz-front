import { Input, InputHintWrap } from "../../../styles/common/InputElements";

const InputHintForm = ({
    hintCount,
    type,
    name,
    hintData,
    onChange,
}) => {
    return (
        <InputHintWrap>
            {Array(hintCount).fill().map((_, index) => (
                <Input
                    type={type}
                    name={name}
                    key={index}
                    value={hintData.hints[index] ?? ''}
                    placeholder={`${index + 1}번째 힌트`}
                    onChange={e => onChange(e, index)}
                    required
                />
            ))}
        </InputHintWrap>
    );
};

export default InputHintForm;