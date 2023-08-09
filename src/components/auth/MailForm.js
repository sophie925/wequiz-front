import styled from "styled-components";
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import Button from "../common/Button";

const MailIconWrap = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0 40px;
`;

const MailIcon = styled(MdOutlineMarkEmailRead)`
    font-size: 5rem;
`;

const MailContent = styled.div`
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.8rem;
`;

const MailBtnWrap = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const MailForm = ({ email, onClick }) => {
    return (
        <>
            <MailIconWrap>
                <MailIcon />
            </MailIconWrap>
            <MailContent>
                <strong>{email}</strong> (으)로
                <br/>
                가입을 위한 메일을 전송하였습니다.
                <br/>
                전달한 메일을 확인하시고
                <br/>
                가입을 진행해주세요.
            </MailContent>
            <MailBtnWrap>
                <Button fullwidth indigo onClick={onClick}>확 인</Button>
            </MailBtnWrap>
        </>
    );
};

export default MailForm;