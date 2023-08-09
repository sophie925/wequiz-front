import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfirmEmail = () => {
    const  navigate = useNavigate();

    let getParamter = (key) => {
        return new URLSearchParams(window.location.search).get(key);
    };

    useEffect(() => {
        let authKey = getParamter("authKey");
        let email = getParamter("email");
        
        axios.post('/api/v1/member/confirm',{
            authenticationKey: authKey,
            emailAccount: email
        })
        .then(response => {
            console.log(response.data.message);
            navigate('/accept', {
                state: {
                    authenticationKey: authKey,
                    emailAccount: email
                }
            });
        })
        .catch(error => {
            console.log("실패", error);
        });
    }, []);

    return (
        <div>메일 검증 화면</div>
    );
};

export default ConfirmEmail;