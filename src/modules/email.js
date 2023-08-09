import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as emailAPI from '../lib/api/email';

const CHANGE_FIELD = 'email/CHANGE_FIELD';
const [PREPAREPASSWORDRESET, PREPAREPASSWORDRESET_SUCCESS, PREPAREPASSWORDRESET_FAILURE] = createRequestActionTypes(
    'email/preparePasswordReset',
);
const [VERIFYCODE, VERIFYCODE_SUCCESS, VERIFYCODE_FAILURE] = createRequestActionTypes(
    'email/verifyCode',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // verify
        key, // email
        value, // 실제 바꾸려는 값
    }),
);
export const preparePasswordReset = createAction(PREPAREPASSWORDRESET, ({ email }) => ({
    email,
}));
export const verifyCode = createAction(VERIFYCODE, ({ email, code }) => ({
    email,
    code,
}));

// 사가 생성
const preparePasswordResetSaga = createRequestSaga(PREPAREPASSWORDRESET, emailAPI.preparePasswordReset);
const verifyCodeSaga = createRequestSaga(VERIFYCODE, emailAPI.verifyCode);
export function* emailSaga() {
    console.log("email saga success");

    yield takeLatest(PREPAREPASSWORDRESET, preparePasswordResetSaga);
    yield takeLatest(VERIFYCODE, verifyCodeSaga);
}

const initialState = {
    send: {
        email: '',
    },
    verify: {
        email: '',
        code: '',
    },
    checkError: null,
    status: null,
};

const email = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
            produce(state, draft => {
                draft[form][key] = value;
        }),
        // 비밀번호 검증용 코드 전송 성공
        [PREPAREPASSWORDRESET_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 비밀번호 검증용 코드 전송 실패
        [PREPAREPASSWORDRESET_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 비밀번호 검증용 코드 확인 성공
        [VERIFYCODE_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 비밀번호 검증용 코드 확인 실패
        [VERIFYCODE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default email;