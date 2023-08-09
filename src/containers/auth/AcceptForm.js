import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { Checkbox, FormControlLabel, FormGroup } from "../../../node_modules/@mui/material/index";
import StyledButton from "../../components/common/Button";

const AcceptFormBlock = styled.div`
    margin-bottom: 50px;
    .logo-area {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3.5rem;
        margin: 50px 0;
        font-weight: bold;
        cursor: pointer;
        p {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            letter-spacing: 2px;
        }
        span {
            font-size: 1rem;
        }
        a {
            text-decoration: none;
            color: black;
        }
    }
    label {
        height: 35px;
    }
    label:first-child {
        border-bottom: 1px solid #ddd;
        padding-bottom: 5px;
    }
    span {
        font-family: 'BMHANNA Air';
    }
    span:first-child {
        font-weight: 800;
    }
    Button {
        margin-top: 40px;
    }
`;

const AcceptForm = () => {
    const  navigate = useNavigate();
    const loaction = useLocation();

    const authKey = loaction.state.authenticationKey;
    const email = loaction.state.emailAccount;

    const values = [
        { id: 0, label: '[필수] 이용약관 동의' },
        { id: 1, label: '[필수] 개인정보 수집 및 이용 동의' },
        { id: 2, label: '[필수] 만 14세 이상입니다.' },
        { id: 3, label: '[선택] 마케팅 활용 동의 및 광고 수신 동의' }
    ];
    
    const [checkItems, setCheckItems] = useState([]);

    const onChange = (checked, id) => {
        if (checked) {
            setCheckItems(prev => [...prev, id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    };

    const onChangeAllCheck = (checked) => {
        console.log("All", checked);
        if (checked) {
            const idArray = [];
            values.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    };

    const onClick = e => {
        //e.preventDefault();
        console.log("onClick");
        if(!checkItems.includes(0) || !checkItems.includes(1) || !checkItems.includes(2)){
            alert("필수 약관 동의를 확인해주세요.");
            return;
        }
        navigate('/create', {
            state: {
                authenticationKey: authKey,
                emailAccount: email
            }
        })
    };

    return (
        <AcceptFormBlock>
            <div className="logo-area">
                <Link to="/">
                    <p>위퀴즈<span>함께 즐기는 초성게임</span></p>
                </Link>
            </div>
            <FormGroup>
                <FormControlLabel
                    label="전체선택"
                    control={
                        <Checkbox
                            checked={checkItems.length === values.length ? true : false}
                            onChange={e => onChangeAllCheck(e.target.checked)}
                        />
                    }
                />
                {values.map((value, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={checkItems.includes(value.id) ? true : false}
                                onChange={e => onChange(e.target.checked, value.id)}
                            />
                        }
                        label={value.label}
                    />
                ))}
            </FormGroup>
            <StyledButton fullwidth indigo onClick={onClick}>확 인</StyledButton>
        </AcceptFormBlock>
    );
};

export default AcceptForm;
