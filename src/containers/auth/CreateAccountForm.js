import AuthOtherForm from "../../components/auth/AuthOtherForm";
import { checkPassword } from "../../utils/CheckValidation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { changeField, initializeForm, create } from "../../modules/auth";

const CrerateAccountForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loaction = useLocation();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.create,
        auth: auth.auth,
        authError: auth.authError,
    }));
    const [errorText, setErrorText] = useState('');
    const [checkItems, setCheckItems] = useState([]);
    // 체크박스 데이터 정보
    const values = [
        { id: 0, label: '[필수] 이용약관 동의' },
        { id: 1, label: '[필수] 개인정보 수집 및 이용 동의' },
        { id: 2, label: '[선택] 만 14세 이상입니다.' },
        { id: 3, label: '[선택] 마케팅 활용 동의 및 광고 수신 동의' }
    ];
    const authKey = loaction.state.authenticationKey;
    const email = loaction.state.emailAccount;

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('create'))
    }, [dispatch]);
    
    // 전체동의 외 체크박스 체크 시
    const onChangeCheck = (checked, id) => {
        if (checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    // 전체동의 체크박스 체크 시
    const onChangeAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            values.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    };

    const onChange = e => {
        const { value, name } = e.target;
        setErrorText("");
        if (name === "password") {
            setErrorText('');
            if (!checkPassword(value)) {
                setErrorText('영어 대·소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 15자 이하로 입력해주세요.');
            }
        }
        dispatch(
            changeField({
                form: 'create',
                key: name,
                value

            })
        );
    };
    
    // 계정 생성 버튼 클릭시
    const onSubmit = e => {
        e.preventDefault(); 
        const { name, password, passwordConfirm } = form;
        // 하나라도 비어 있다면
        if ([name, password, passwordConfirm].includes('')) {
            setErrorText("이름, 비밀번호를 모두 입력하세요.");
        }
        // 비밀번호가 일치하지 않는다면
        if (password !== passwordConfirm) {
            setErrorText('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({ form: 'create', key: 'password', value: '' }));
            dispatch(changeField({ form: 'create', key: 'passwordConfirm', value: '' }));
            return;
        }
        if(!checkItems.includes(0) || !checkItems.includes(1)){
            setErrorText("필수 약관동의를 확인해주세요.");
            return;
        }
        dispatch(create({ authKey, email, name, password }));
    };

    // 계정생성 성공/실패 처리
    useEffect(() => {
        if (authError) {
            console.log("오류 발생: ", authError);
        } 
        if (auth && auth.status === 201) {
            // console.log("회원가입 성공: ", auth);
            setErrorText("");
            navigate("/login");
        }
    }, [auth, authError, navigate]);
    
    return (
        <AuthOtherForm
            type="create"
            errorText={errorText}
            values={values}
            checkItems={checkItems}
            onChangeCheck={onChangeCheck}
            onChangeAllCheck={onChangeAllCheck}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default CrerateAccountForm;