import AuthOtherForm from "../../components/auth/AuthOtherForm";
import Loading01 from "../../components/common/Loading01";
import { checkEmail } from "../../utils/CheckValidation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeField, emailReset, preparePasswordReset } from "../../modules/email";

const SendEmailForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, result, error } = useSelector(({ email }) => ({
        data: email.send,
        result: email.status,
        error: email.checkError
    }));
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);

    // 메일전송 확인안내용 모달
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        dispatch(changeField({ form: 'send', key: 'email', value: '' }));
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        navigate("/login");
    };
    
    const onChange = e => {
        const { name, value } = e.target;
        setErrorText('');
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
        if (!checkEmail(email)) {
            setErrorText('이메일을 올바른 형식으로 입력해주세요.');
            return;
        }
        setLoading(true);
        dispatch(preparePasswordReset(data));
    };

    // 비밀번호 변경용 이메일 전송 api 수행 후 로직
    useEffect(() => {
        setLoading(false);
        if (error) {
            console.log("에러 발생", error);
            setErrorText('이메일을 찾을 수 없습니다.');
        }
        if (result) {
            // console.log("이메일 전송 성공", result);
            dispatch(emailReset());
            handleOpen();
            setErrorText('');
        }
    }, [result, error, dispatch]);

    return (
        <>
            <AuthOtherForm
                type="send"
                errorText={errorText}
                isOpen={isOpen}
                handleClose={handleClose}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            {loading ? <Loading01 /> : null}
        </>
    );
};

export default SendEmailForm;