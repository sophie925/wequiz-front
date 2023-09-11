import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendJoinEmail } from '../../modules/email';

const ConfirmEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { result } = useSelector(({ email }) => ({
        result: email.status
    }));

    const getParamter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };

    let authKey = getParamter("authKey");
    let email = getParamter("email");

    useEffect(() => {
        dispatch(sendJoinEmail({ authKey, email }));
    }, [dispatch, authKey, email]);

    // 회원가입용 이메일 검증 api 호출 후 로직
    useEffect(() => {
        if (result && result.status === 200) {
            navigate('/create', {
                state: {
                    authenticationKey: authKey,
                    emailAccount: email
                }
            });
        }
    }, [result, navigate, authKey, email]);

    return (
        <div>메일 검증 화면</div>
    );
};

export default ConfirmEmail;