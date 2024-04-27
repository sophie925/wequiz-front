// 비밀번호 유효성 검사
export const checkPassword = (value) => {
    // 8 ~ 15자 영문, 숫자, 특수문자 조합
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%]).{8,15}$/;

    return regExp.test(value);
};

// 이메일 유효성 검사
export const checkEmail = (value) => {
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return regExp.test(value);
};

// 정답 유효성 검사
export const checkAnswer = (value) => {
    const regExp = /^[가-힣\s]+$/;

    return regExp.test(value);
};