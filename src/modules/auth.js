import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const RESET_RESULT = 'auth/RESET_RESULT';
const UPDATE_DATA = 'auth/UPDATE_DATA';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN',
);
const [CREATE, CREATE_SUCCESS, CREATE_FAILURE] = createRequestActionTypes(
    'auth/CREATE',
);
const [GETPROFILE, GETPROFILE_SUCCESS, GETPROFILE_FAILURE] = createRequestActionTypes(
    'auth/GETPROFILE',
);
const [MODIFYPROFILE, MODIFYPROFILE_SUCCESS, MODIFYPROFILE_FAILURE] = createRequestActionTypes(
    'auth/MODIFYPROFILE',
);
const [WITHDRAW, WITHDRAW_SUCCESS, WITHDRAW_FAILURE] = createRequestActionTypes(
    'auth/WITHDRAW',
);
const [CHANGEPASSWORD, CHANGEPASSWORD_SUCCESS, CHANGEPASSWORD_FAILURE] = createRequestActionTypes(
    'auth/changePassword'
);
const [RESETPASSWORD, RESETPASSWORD_SUCCESS, RESETPASSWORD_FAILURE] = createRequestActionTypes(
    'auth/resetPassword'
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // register, login, create
        key, // email, password
        value, // 실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register, login
export const authReset = createAction(RESET_RESULT);
export const updateData = createAction(
    UPDATE_DATA,
    ({ form, data }) => ({
        form,
        data
    })
);
export const register = createAction(REGISTER, ({ email }) => ({
    email
}));
export const login = createAction(LOGIN, ({ email, password }) => ({
    email,
    password,
}));
export const create = createAction(CREATE, ({ authKey, email, name, password }) => ({
    authKey,
    email,
    name,
    password
}));
export const getProfile = createAction(GETPROFILE);
export const modifyProfile = createAction(MODIFYPROFILE, name => name);
export const withdraw = createAction(WITHDRAW);
export const passwordChange = createAction(CHANGEPASSWORD, ({ oldPassword, newPassword }) => ({
    oldPassword,
    newPassword,
}));
export const resetPassword = createAction(RESETPASSWORD, ({ email, authKey, newPassword }) => ({
    email,
    authKey,
    newPassword
}));

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const createSaga = createRequestSaga(CREATE, authAPI.create);
const getProfileSaga = createRequestSaga(GETPROFILE, authAPI.getProfile);
const modifyProfileSaga = createRequestSaga(MODIFYPROFILE, authAPI.modifyProfile);
const withdrawSaga = createRequestSaga(WITHDRAW, authAPI.withdraw);
const changePasswordSaga = createRequestSaga(CHANGEPASSWORD, authAPI.changePassword);
const resetPasswordSaga = createRequestSaga(RESETPASSWORD, authAPI.resetPassword);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(CREATE, createSaga);
    yield takeLatest(GETPROFILE, getProfileSaga);
    yield takeLatest(MODIFYPROFILE, modifyProfileSaga);
    yield takeLatest(WITHDRAW, withdrawSaga);
    yield takeLatest(CHANGEPASSWORD, changePasswordSaga);
    yield takeLatest(RESETPASSWORD, resetPasswordSaga);
}

const initialState = {
    register: {
        email: '',
    },
    login : {
        email: '',
        password: '',
    },
    create: {
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
    },
    getInfo: {
        name: '',
        email: ''
    },
    modify: {
        name: ''
    },
    change: {
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    },
    reset: {
        newPassword: '',
        newPasswordConfirm: '',
    },
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
            produce(state, draft => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,  // 폼 전환 시 회원 인증 에러 초기화
        }),
        [RESET_RESULT]: (state) => ({
            ...state,
            auth: null,
            authError: null,
        }),
        [UPDATE_DATA]: (state, { payload: { form, data } }) => ({
            ...state,
           [form]: data
        }),
        // 회원가입 성공
        [REGISTER_SUCCESS]: (state, { payload: auth, data}) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 회원가입 실패
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 로그인 성공
        [LOGIN_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 로그인 실패
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 계정생성 성공
        [CREATE_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 계정생성 실패
        [CREATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 회원정보 조회 성공
        [GETPROFILE_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 회원정보 조회 실패
        [GETPROFILE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 회원정보 수정 성공
        [MODIFYPROFILE_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 회원정보 수정 실패
        [MODIFYPROFILE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 회원탈퇴 성공
        [WITHDRAW_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        // 회원탈퇴 실패
        [WITHDRAW_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 비밀번호 변경 성공
        [CHANGEPASSWORD_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 비밀번호 변경 실패
        [CHANGEPASSWORD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        // 비밀번호 초기화 성공
        [RESETPASSWORD_SUCCESS]: (state, { payload: auth, data }) => ({
            ...state,
            authError: null,
            auth,
            data,
        }),
        // 비밀번호 초기화 실패
        [RESETPASSWORD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;