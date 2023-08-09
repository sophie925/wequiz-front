import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { useState } from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError
    }));
    const [className, setClassName] = useState('');
    const [errorText, setErrorText] = useState('');
    
    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        setErrorText("");
        dispatch(initializeForm('login'));
        dispatch(changeField({ form: 'login', key: 'email', value: '' }));
        dispatch(changeField({ form: 'login', key: 'password', value: '' }));
    }, [dispatch]);

    const onChange = e => {
        const { value, name } = e.target;
        if (value !== '') {
            setErrorText("");
        }
        setClassName((prevState) => ({ ...prevState, [name]: value.length > 0 ? 'fc' : ''}));
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = form;
        // 하나라도 비어 있다면
        if ([email, password].includes('')) {
            setErrorText('이메일, 비밀번호를 모두 입력해주세요.');
            return;
        }
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!emailRegex.test(email)) {
            setErrorText('이메일을 올바른 형식으로 입력해주세요.');
            return;
        }
        dispatch(login({ email, password }));
    };


    // 로그인 성공/실패 처리
    useEffect(() => {
        if (authError) {
            setErrorText('이메일 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.');
            dispatch(changeField({ form: 'login', key: 'email', value: '' }));
            dispatch(changeField({ form: 'login', key: 'password', value: '' }));
        }
        if (auth && auth.status === 200) {
            console.log("로그인 성공: ", auth);
            try{
                setErrorText("");
                localStorage.setItem('user', auth.data.token);
                localStorage.setItem('username', auth.data.username);
                navigate('/');
                window.location.reload();
            } catch (e) {
                console.log(e, 'localStorage is not working');
            }
    }
    }, [auth, authError, navigate]);

    return (
        <AuthForm
            type="login"
            form={form}
            className={className}
            errorText={errorText}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;