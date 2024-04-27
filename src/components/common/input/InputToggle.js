import { ToggleButton, ToggleButtonGroup } from "../../../../node_modules/@mui/material/index";

const InputToggle = ({
    name,
    value,
    onChange,
    toggle
}) => {
    return (
        <ToggleButtonGroup
            name={name}
            value={value}
            exclusive
            onChange={onChange}
            aria-label="Platform"
        >
            {toggle.map((v, i) => (
                <ToggleButton key={i} value={v.value}>{v.title}</ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default InputToggle;