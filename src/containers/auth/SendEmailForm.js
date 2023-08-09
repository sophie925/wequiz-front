import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthOtherForm from "../../components/auth/AuthOtherForm";
import { changeField, preparePasswordReset } from "../../modules/email";

const SendEmailForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, result } = useSelector(({ email }) => ({
        data: email.send,
        result: email.status,
    }));
    const [errorText, setErrorText] = useState("");
    
    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField({
                form: 'send',
                key: name,
                value
            })
        );
    };

    // 저장하기 버튼 클릭
    const onSubmit = e => {
        e.preventDefault();
        const { email } = data;
        if ([email].includes('')) {
            setErrorText('이메일을 입력해주세요.');
            return;
        }
        dispatch(preparePasswordReset(data));
    };

    // 비밀번호 변경용 이메일 전송 api 수행 후 로직
    useEffect(() => {
        if (result) {
            console.log("이메일 전송 성공", result);
            setErrorText('');
            navigate("/login");
        }
    }, [result, navigate]);

    return (
        <AuthOtherForm
            type="send"
            errorText={errorText}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default SendEmailForm;