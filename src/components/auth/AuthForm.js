import Button from "../common/Button";
import { AuthBottomWrap, BottomLink, BottomLink2, BottomLinkWrap, ErrorText } from "./AuthElements";
import MailForm from "./MailForm";
import ModalForm from "../common/ModalForm";

/**
 * 회원가입 또는 로그인 폼을 보여줌
*/

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type, form, className, errorText, isOpen, handleClose, isModalOpen, handleModalClose, onChange, onSubmit }) => {
    const text = textMap[type];
    return (
        <>
            <form onSubmit={onSubmit} noValidate>
                {(type === 'register' || type === 'login') && (
                    <>
                        <div className="label">
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                                className={className['email']}
                                required
                            />
                            <label>Email</label>
                        </div>
                        {isOpen &&
                            <ModalForm isOpen={isOpen} title="안내 메세지">
                                <div style={{ textAlign: 'center' }}>
                                    <p>이미 가입된 이메일 주소입니다.</p>
                                    <p style={{ marginBottom: '30px' }}>다시 한 번 확인해주세요.</p>
                                    <Button medium onClick={handleClose}>확인</Button>
                                </div>
                            </ModalForm>
                        }
                        {isModalOpen && 
                            <ModalForm isOpen={isModalOpen} title="메일전송 확인" onClose={handleModalClose}>
                                <MailForm
                                    email={form.email}
                                    onClick={handleModalClose}
                                />
                            </ModalForm>
                        }
                    </>
                )}
                {type === 'login' && (
                    <div className="label">
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            className={className['password']}
                            required
                        />
                        <label>Password</label>
                    </div>
                )}
                <ErrorText>{errorText}</ErrorText>
                <Button fullwidth indigo>{text}</Button>
            </form>
            <AuthBottomWrap>
                {type === 'register' && (
                    <div>
                        <span>이미 사용중이신가요?</span>
                        <BottomLink to="/login">로그인</BottomLink>
                    </div>
                )}
                {type === 'login' && (
                    <div>
                        <BottomLink2 to="/sendEmail">비밀번호 재설정</BottomLink2>
                        <BottomLinkWrap>
                            <span>계정이 없으신가요?</span>
                            <BottomLink to="/register">회원가입</BottomLink>
                        </BottomLinkWrap>
                    </div>
                )}
            </AuthBottomWrap>
        </>
    );
};

export default AuthForm;