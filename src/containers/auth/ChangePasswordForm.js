import UserInfoForm from "../../components/auth/UserInfoForm";
import { checkPassword } from "../../utils/CheckValidation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReset, changeField, initializeForm, passwordChange } from "../../modules/auth";

const ChangePasswordForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.change,
        auth: auth.auth,
        authError: auth.authError
    }));
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        dispatch(initializeForm('change'));
    }, [dispatch]);

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
                form: 'change',
                key: name,
                value
            })
        );
    };

    // 저장하기 버튼 클릭
    const onSubmit = e => {
        e.preventDefault();
        const { oldPassword, newPassword, newPasswordConfirm } = form;
        console.log([oldPassword].includes(''), oldPassword);
        console.log([newPassword].includes(''), newPassword);
        console.log([newPasswordConfirm].includes(''), newPasswordConfirm);
        // 하나라도 비어 있다면
        if ([oldPassword, newPassword, newPasswordConfirm].includes('')) {
            setErrorText('현재 비밀번호, 새 비밀번호를 모두 입력해주세요.');
            return;
        }
        // 비밀번호가 일치하지 않는다면
        if (newPassword !== newPasswordConfirm) {
            setErrorText('새 비밀번호가 서로 일치하지 않습니다.');
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
        dispatch(passwordChange({ oldPassword, newPassword }));
    };

    // 비밀번호 변경 api 수행 후 로직
    useEffect(() => {
        if (authError) {
            console.log("변경 실패", authError);
        }
        if (auth) {
            // console.log("변경 성공", auth);
            handleModalOpen();
        }
    }, [auth, authError]);

    // 비밀번호 변경 완료 안내메세지용 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => {
        setIsModalOpen(false);
        dispatch(authReset());
        navigate("/mypage");
    };

    return(
        <UserInfoForm 
            type="changePassword"
            form={form}
            errorText={errorText}
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default ChangePasswordForm;