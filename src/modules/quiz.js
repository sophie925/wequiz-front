import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as quizAPI from '../lib/api/quiz';

const CHANGE_FIELD = 'quiz/CHANGE_FIELD';
const INITIALIZE_FORM = 'quiz/INITIALIZE_FORM';
const RESET_RESULT = 'quiz/RESET_RESULT';
const UPDATE_DATA = 'quiz/UPDATE_DATA'

const [MAKE, MAKE_SUCCESS, MAKE_FAILURE] = createRequestActionTypes(
    'quiz/MAKE',
);
const [CHECKSOLVINGSTATE, CHECKSOLVINGSTATE_SUCCESS, CHECKSOLVINGSTATE_FAILURE] = createRequestActionTypes(
    'quiz/CHECKSOLVINGSTATE',
);
const [MINE, MINE_SUCCESS, MINE_FAILURE] = createRequestActionTypes(
    'quiz/MINE',
);
const [GETLISTBOOKMARKED, GETLISTBOOKMARKED_SUCCESS, GETLISTBOOKMARKED_FAILURE] = createRequestActionTypes(
    'quiz/GETLISTBOOKMARKED',
);
const [GETSTARTEDQUIZ, GETSTARTEDQUIZ_SUCCESS, GETSTARTEDQUIZ_FAILURE] = createRequestActionTypes(
    'quiz/GETSTARTEDQUIZ',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // make, resolve
        key, // category, subject, accessibility, title, description, quizzes
        value, // 실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // make, resolve
export const quizReset = createAction(RESET_RESULT);
export const updateData = createAction(
    UPDATE_DATA,
    ({ form, data }) => ({
        form,
        data,
    })
);
export const make = createAction(
    MAKE,
    ({ category, accessibility, title, description, quizzes }) => ({
        category,
        accessibility,
        title,
        description,
        quizzes,
    })
);
export const checkSolvingState = createAction(CHECKSOLVINGSTATE, quizPaperId => quizPaperId);
export const mine = createAction(MINE);
export const getListBookmarked = createAction(GETLISTBOOKMARKED);
export const getStartedQuiz = createAction(GETSTARTEDQUIZ);

// 사가 생성
const makeSaga = createRequestSaga(MAKE, quizAPI.make);
const checkSolvingStateSaga = createRequestSaga(CHECKSOLVINGSTATE, quizAPI.checkSolvingState);
const mineSaga = createRequestSaga(MINE, quizAPI.mine);
const getListBookmarkedSaga = createRequestSaga(GETLISTBOOKMARKED, quizAPI.getListBookmarked);
const getStartedQuizSaga = createRequestSaga(GETSTARTEDQUIZ, quizAPI.getStartedQuiz);
export function* quizSaga() {
    // console.log("quiz saga success");

    yield takeLatest(MAKE, makeSaga);
    yield takeLatest(CHECKSOLVINGSTATE, checkSolvingStateSaga);
    yield takeLatest(MINE, mineSaga);
    yield takeLatest(GETLISTBOOKMARKED, getListBookmarkedSaga);
    yield takeLatest(GETSTARTEDQUIZ, getStartedQuizSaga);
}

const initialState = {
    make: {
        category: '',
        quizCount: 1,
        title: '',
        description: '',
        accessibility: 'PUBLIC',
        quizzes: {
            answer: '',
            hints: []
        }
    },
    checkError: null,
    status: null,
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
        }),
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        [UPDATE_DATA]: (state, { payload: { form, data } }) => ({
            ...state,
           [form]: data,
        }),
        // 만들기 성공
        [MAKE_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 만들기 조회 실패
        [MAKE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 선택된 퀴즈 상태 확인 성공
        [CHECKSOLVINGSTATE_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 선택된 퀴즈 상태 확인 실패
        [CHECKSOLVINGSTATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 내 퀴즈 조회 성공
        [MINE_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 내 퀴즈 조회 실패
        [MINE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 북마크한 퀴즈 조회 성공
        [GETLISTBOOKMARKED_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 북마크한 퀴즈 조회 실패
        [GETLISTBOOKMARKED_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        
        // 최근 진행중인 퀴즈 조회 성공
        [GETSTARTEDQUIZ_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 최근 진행중인 퀴즈 조회 실패
        [GETSTARTEDQUIZ_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default auth;