import AuthOtherForm from "../../components/auth/AuthOtherForm";
import { checkPassword } from "../../utils/CheckValidation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReset, changeField, resetPassword } from "../../modules/auth";

const ResetPasswordForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.reset,
        auth: auth.auth,
        authError: auth.authError,
    }));
    const [errorText, setErrorText] = useState("");

    // URL로 넘어온 파라미터 가져오는 함수
    const getParamter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };

    // 비밀번호 변경 확인안내용 모달
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        dispatch(changeField({
            form: 'reset',
            key: 'email',
            value: ''
        }));
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        navigate("/login");
    };

    const onChange = e => {
        const { name, value } = e.target;
        setErrorText('');
        if (name === "newPassword") {
            if(!checkPassword(value)) {
                setErrorText('영문 대·소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 15자 이하로 입력해주세요.');
            }
        }
        dispatch(
            changeField({
                form: 'reset',
                key: name,
                value
            })
        );
    };

    // 저장하기 버튼 클릭
    const onSubmit = e => {
        e.preventDefault();
        const email = getParamter("email");
        const authKey = getParamter("authKey");
        const { newPassword, newPasswordConfirm } = form;
        // 하나라도 비어 있다면
        if ([newPassword, newPasswordConfirm].includes('')) {
            setErrorText('비밀번호를 모두 입력해주세요.');
            return;
        }
        // 비밀번호가 일치하지 않는다면
        if (newPassword !== newPasswordConfirm) {
            setErrorText('비밀번호가 서로 일치하지 않습니다.');
            dispatch(changeField({
                form: 'change',
                key: 'newPassword',
                value: ''
            }));
            dispatch(changeField({
                form: 'change',
                key: 'newPasswordConfirm',
                value: ''
            }));
            return;
        }
        dispatch(resetPassword({ email, authKey, newPassword }));
    };

    // 비밀번호 재설정 api 수행 후 로직
    useEffect(() => {
        if (authError) {
            console.log("재설정 실패", authError);
        }
        if (auth) {
            // console.log("재설정 성공", auth);
            setErrorText('');
            dispatch(authReset());
            handleOpen();
        }
    }, [auth, authError, dispatch, navigate]);

    return (
        <AuthOtherForm
            type="reset"
            errorText={errorText}
            isOpen={isOpen}
            handleClose={handleClose}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default ResetPasswordForm;