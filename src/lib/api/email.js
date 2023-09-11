import client from "./client";

// 회원가입용 이메일 검증
export const sendJoinEmail = ({ authKey, email }) =>
    client.post('/api/v1/member/confirm', {
        authenticationKey: authKey,
        emailAccount: email
    });

// 비밀번호 변경용 이메일 전송
export const preparePasswordReset = ({ email }) =>
    client.post('/api/v1/member/passwordreset-preparation', {
        emailAccount: email
    });