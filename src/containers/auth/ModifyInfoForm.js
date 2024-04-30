import UserInfoForm from "../../components/auth/UserInfoForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReset, changeField, initializeForm, modifyProfile } from "../../modules/auth";

const ModifyInfoForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.modify,
        auth: auth.auth,
        authError: auth.authError
    }));
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        dispatch(initializeForm('modify'));
        dispatch(changeField({
            form: 'modify',
            key: 'name',
            value: ''
        }));
    }, [dispatch]);

    const onChange = e => {
        const { name, value } = e.target;
        if (value !== '') {
            setErrorText('');
        }
        dispatch(
            changeField({
                form: 'modify',
                key: name,
                value
            })
        );
    };

    // 확인 버튼 클릭
    const onSubmit = e => {
        e.preventDefault();
        const { name } = form;
        if ([name].includes('')) {
            setErrorText("이름을 입력해주세요.");
            return;
        }
        dispatch(modifyProfile(name));
    };

    // 회원정보 수정 api 수행 후 로직
    useEffect(() => {
        if (authError) {
            console.log("회원정보 수정 오류발생: ", authError);
        }
        if (auth) {
            // console.log("회원정보 수정 성공: ", auth);
            dispatch(authReset());
            dispatch(changeField({
                form: 'modify',
                key: 'name',
                value: ''
            }));
            navigate("/mypage");
        }
    }, [auth, authError, dispatch, navigate]);

    return(
        <UserInfoForm 
            type="modifyInfo"
            form={form}
            errorText={errorText}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default ModifyInfoForm;