import client from "./client";

// 회원가입용 이메일 전송
export const sendJoinEmail = ({ authKey, email }) =>
    client.post('/api/v1/member/confirm', {
        authenticationKey: authKey,
        emailAccount: email
    });

// 비밀번호 검증용 코드 이메일 전송
export const preparePasswordReset = ({ email }) =>
    client.post('/api/v1/member/passwordreset-preparation', {
        emailAccount: email
    });

// 비밀번호 검증용 코드 확인
export const verifyCode = ({ email, code }) =>
    client.post('/api/v1/verify-email', {
        emailAccount: email,
        code: code
    });
