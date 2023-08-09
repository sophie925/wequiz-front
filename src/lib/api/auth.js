import qs from "qs";
import client from "./client";

// 로그인
export const login = ({ email, password }) =>
    client.post('/api/v1/login', {
        account: email,
        password: password 
    });

// 회원가입(초기)
export const register = ({ email }) =>
    client.post('/api/v1/member/standby', { emailAccount: email });

// 계정생성
export const create = ({ authKey, email, name, password }) =>
    client.post('/api/v1/member', {
        authenticationKey: authKey,
        emailAccount: email,
        name: name,
        password: password
    });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 회원정보 조회
export const getProfile = () => client.get('/api/v1/member');

// 회원정보 수정
export const modifyProfile = name => {
    const queryString = qs.stringify({
        name
    });
    return client.patch(`/api/v1/member?${queryString}`);
};

// 회원탈퇴
export const withdraw = () => client.post('/api/v1/member/withdraw');

// 비밀번호 변경
export const changePassword = ({ oldPassword, newPassword }) =>
    client.post('/api/v1/member/passwordchange', {
        oldPassword: oldPassword,
        newPassword: newPassword
    });

// 비밀번호 초기화
export const resetPassword = ({ email, authKey, newPassword }) =>
    client.post('/api/v1/member/passwordreset', {
        emailAccount: email,
        authKey: authKey,
        newPassword: newPassword
    });