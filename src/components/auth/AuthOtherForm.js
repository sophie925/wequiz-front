import { Checkbox, FormControlLabel } from "../../../node_modules/@mui/material/index";
import { CheckboxWrap, HrStyle } from "../../styles/auth/AuthOtherElements";
import { ErrorText } from "../../styles/common/CommonElements";
import Button from "../common/Button";
import ModalForm from "../common/ModalForm";
import InputBox from "../common/input/InputBox";
import InputForm from "../common/input/InputForm";

/**
 * 계정 생성 또는 이메일 전송 또는 비밀번호 재설정 폼을 보여줌
 */

const AuthOtherForm = ({
    type,
    form,
    errorText,
    values,
    checkItems,
    onChangeCheck,
    onChangeAllCheck,
    isOpen,
    handleClose,
    onChange,
    onSubmit
}) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            {type === "create" && (
                <>
                    <InputForm
                        title="이름"
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="이름을 입력해주세요."
                        onChange={onChange}
                    />
                    <InputForm
                        title="비밀번호"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <InputBox
                        type="password"
                        name="passwordConfirm"
                        value={form.passwordConfirm}
                        onChange={onChange}
                        placeholder="비밀번호를 다시 한번 입력해주세요."
                    />
                    <ErrorText>{errorText}</ErrorText>
                    <CheckboxWrap>
                        <FormControlLabel
                            label="전체동의"
                            control={
                                <Checkbox
                                    checked={checkItems.length === values.length ? true : false}
                                    onChange={e => onChangeAllCheck(e.target.checked)}
                                />
                            }
                        />
                        <HrStyle />
                        {values.map((value, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={checkItems.includes(value.id) ? true : false}
                                        onChange={e => onChangeCheck(e.target.checked, value.id)}
                                    />
                                }
                                label={value.label}
                            />
                        ))}
                    </CheckboxWrap>
                    <Button fullwidth indigo disabled={checkItems.includes(0) && checkItems.includes(1) ? false : true}>
                        계정 생성
                    </Button>
                </>
            )}
            {type === "send" && (
                <>
                    <InputForm
                        title="이메일(비밀번호 재설정)"
                        type="email"
                        name="email"
                        placeholder="비밀번호 재설정하기 위한 이메일을 입력해주세요."
                        onChange={onChange}
                    />
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth indigo>이메일 전송</Button>
                    {isOpen &&
                        <ModalForm isOpen={isOpen} title="안내 메세지">
                            <div style={{ textAlign: 'center' }}>
                                <p>작성한 Email 주소로 메일을 전송했습니다.</p>
                                <p>확인하시고 비밀번호를 변경해주세요.</p>
                                <p  style={{ fontSize: '15px', color: '#868e96', fontWeight: 'bold', margin: '30px 0' }}>* 메일이 도착하지 않으신 경우 스팸메일함도 확인해주세요.</p>
                                <Button medium onClick={handleClose}>확인</Button>
                            </div>
                        </ModalForm>
                    }
                </>
            )}
            {type === "reset" && (
                <>
                    <InputForm
                        title="새 비밀번호"
                        type="password"
                        name="newPassword"
                        placeholder="새 비밀번호를 입력해주세요."
                        onChange={onChange}
                    />
                    <InputBox
                        type="password"
                        name="newPasswordConfirm"
                        placeholder="새 비밀번호를 다시 한번 입력해주세요."
                        onChange={onChange}
                        required
                    />
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth indigo>저장</Button>
                    {isOpen &&
                        <ModalForm isOpen={isOpen} title="안내 메세지">
                            <div style={{ textAlign: 'center' }}>
                                <p>비밀번호 재설정이 완료되었습니다.</p>
                                <p style={{ marginBottom: '30px' }}>다시 로그인 해주세요.</p>
                                <Button medium onClick={handleClose}>확인</Button>
                            </div>
                        </ModalForm>
                    }
                </>
            )}
        </form>
    );
};

export default AuthOtherForm;