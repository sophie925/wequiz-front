import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { authReset, changeField, initializeForm, register } from "../../modules/auth";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
    }));
    const [className, setClassName] = useState('');
    const [errorText, setErrorText] = useState('');
    
    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    const onChange = e => {
        const { value, name } = e.target;
        if (value !== '') {
            setErrorText("");
        }
        setClassName((prevState) => ({ ...prevState, [name]: value.length > 0 ? 'fc' : ''}));
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };
    
    const onSubmit = e => {
        e.preventDefault(); 
        const { email } = form;
        if ([email].includes('')) {
            setErrorText('이메일을 입력해주세요.');
            return;
        }
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) {
            setErrorText('이메일을 올바른 형식으로 입력해주세요.');
            return;
        }
        dispatch(register({ email }));
    };

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            console.log("오류 발생: ", authError);
            const message = authError.response.data.message;
            if(message === "이미 회원으로 가입된 메일 주소입니다.") {
                handleOpen();
            }
            return;
        } 
        if (auth && auth.status === 201) {
            //dispatch(check());
            handleModalOpen();
        }
    }, [auth, authError]);

    // 메일전송 확인팝업용 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => {
        dispatch(changeField({ form: 'register', key: 'email', value: '' }));
        setIsModalOpen(false);
        dispatch(authReset());
    };
    // 가입된 회원일경우 안내메세지용 모달
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        dispatch(changeField({ form: 'register', key: 'email', value: '' }));
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        dispatch(authReset());
    };

    return (
        <AuthForm
            type="register"
            form={form}
            className={className}
            errorText={errorText}
            isOpen={isOpen}
            handleClose={handleClose}
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;