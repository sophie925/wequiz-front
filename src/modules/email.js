import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as emailAPI from '../lib/api/email';

const CHANGE_FIELD = 'email/CHANGE_FIELD';
const RESET_RESULT = 'email/RESET_RESULT';
const [SENDJOINEMAIL, SENDJOINEMAIL_SUCCESS, SENDJOINEMAIL_FAILURE] = createRequestActionTypes(
    'email/sendJoinEmail',
);
const [PREPAREPASSWORDRESET, PREPAREPASSWORDRESET_SUCCESS, PREPAREPASSWORDRESET_FAILURE] = createRequestActionTypes(
    'email/preparePasswordReset',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // verify
        key, // email
        value, // 실제 바꾸려는 값
    }),
);
export const emailReset = createAction(RESET_RESULT);
export const sendJoinEmail = createAction(SENDJOINEMAIL, ({ authKey, email }) => ({
    authKey,
    email,
}));
export const preparePasswordReset = createAction(PREPAREPASSWORDRESET, ({ email }) => ({
    email,
}));

// 사가 생성
const sendJoinEmailSaga = createRequestSaga(SENDJOINEMAIL, emailAPI.sendJoinEmail);
const preparePasswordResetSaga = createRequestSaga(PREPAREPASSWORDRESET, emailAPI.preparePasswordReset);
export function* emailSaga() {
    // console.log("email saga success");

    yield takeLatest(SENDJOINEMAIL, sendJoinEmailSaga);
    yield takeLatest(PREPAREPASSWORDRESET, preparePasswordResetSaga);
}

const initialState = {
    send: {
        email: '',
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
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 회원가입용 이메일 검증 성공
        [SENDJOINEMAIL_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            checkError: null,
            status,
            data,
        }),
        // 회원가입용 이메일 검증 실패
        [SENDJOINEMAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 비밀번호 변경용 이메일 전송 성공
        [PREPAREPASSWORDRESET_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            checkError: null,
            status,
            data,
        }),
        // 비밀번호 변경용 이메일 전송 실패
        [PREPAREPASSWORDRESET_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default email;