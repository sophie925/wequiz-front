import styled from "styled-components";
import oc from "open-color";

export const InputBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`;

export const InputBoxLabel = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 20px;
    font-size: 14px;
    height: 50px;

    &:focus {
        border: 2px solid ${oc.indigo[8]};
        box-sizing: border-box;
    }
`;

// 인풋박스 + 버튼 (퀴즈만들기)
export const InputButtonWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    gap: 0.5rem;
`;

// 인풋박스 + 양쪽버튼 (퀴즈만들기)
export const InputBothWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    button {
        width: 100%;
        height: 50px;
    }
`;

export const InputHintWrap = styled.div`
    display: grid;
    gap: 0.8rem;
`;