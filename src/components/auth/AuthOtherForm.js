import { Checkbox, FormControlLabel } from "../../../node_modules/@mui/material/index";
import Button from "../common/Button";
import { AuthOtherInputWrap, CheckboxWrap, HrStyle } from "./AuthOtherElements";
import { ErrorText } from "./UserInfoElement";

/**
 * 계정 생성 또는 이메일 전송 또는 비밀번호 재설정 폼을 보여줌
 */

const AuthOtherForm = ({ type, errorText, values, checkItems, onChangeCheck, onChangeAllCheck, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} noValidate>
            {type === "create" && (
                <>
                    <AuthOtherInputWrap>
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            onChange={onChange}
                            placeholder="이름을 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
                    <AuthOtherInputWrap>
                     <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            onChange={onChange}
                            placeholder="비밀번호를 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
                    <AuthOtherInputWrap>
                        <input
                            type="password"
                            name="passwordConfirm"
                            onChange={onChange}
                            placeholder="비밀번호를 다시 한번 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
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
                    <AuthOtherInputWrap>
                        <label>비밀번호를 재설정 할 이메일</label>
                        <input
                            type="email"
                            name="email"
                            onChange={onChange}
                            placeholder="이메일을 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth indigo>이메일 전송</Button>
                </>
            )}
            {type === "reset" && (
                <>
                    <AuthOtherInputWrap>
                        <label>새 비밀번호</label>
                        <input
                            type="password"
                            name="newPassword"
                            onChange={onChange}
                            placeholder="새 비밀번호를 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
                    <AuthOtherInputWrap>
                        <input
                            type="password"
                            name="newPasswordConfirm"
                            onChange={onChange}
                            placeholder="새 비밀번호를 다시 한번 입력해주세요."
                            required
                        />
                    </AuthOtherInputWrap>
                    <ErrorText>{errorText}</ErrorText>
                    <Button fullwidth indigo>저장</Button>
                </>
            )}
        </form>
    );
};

export default AuthOtherForm;