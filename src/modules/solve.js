import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as solveAPI from '../lib/api/solve';

const CHANGE_FIELD = 'solve/CHANGE_FIELD';
const INITIALIZE_FORM = 'solve/INITIALIZE_FORM';
const RESET_RESULT = 'solve/RESET_RESULT';
const UPDATE_DATA = 'quiz/UPDATE_DATA';

const [QUIZPAPERS, QUIZPAPERS_SUCCESS, QUIZPAPERS_FAILURE] = createRequestActionTypes(
    'solve/QUIZPAPERS',
);
const [GETLISTQUIZPAPERS, GETLISTQUIZPAPERS_SUCCESS, GETLISTQUIZPAPERS_FAILURE] = createRequestActionTypes(
    'solve/GETLISTQUIZPAPERS',
);
const [VIEWQUIZPAPER, VIEWQUIZPAPER_SUCCESS, VIEWQUIZPAPER_FAILURE] = createRequestActionTypes(
    'solve/VIEWQUIZPAPER',
);
const [VIEWNEWQUIZPAPER, VIEWNEWQUIZPAPER_SUCCESS, VIEWNEWQUIZPAPER_FAILURE] = createRequestActionTypes(
    'solve/VIEWNEWQUIZPAPER',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // quizpaper, select
        key, // category
        value, // 실제 바꾸려는 값
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const solveReset = createAction(RESET_RESULT);
export const updateData = createAction(
    UPDATE_DATA,
    ({ form, data }) => ({
        form,
        data
    })
);
export const quizpapers = createAction(QUIZPAPERS);
export const getListQuizPapers = createAction(
    GETLISTQUIZPAPERS,
    ({ page, size, category, status, sort }) => ({
        page,
        size,
        category,
        status,
        sort
    })
);
export const viewQuizPaper = createAction(VIEWQUIZPAPER, quizPaperId => quizPaperId);
export const viewNewQuizPaper = createAction(VIEWNEWQUIZPAPER, quizPaperId => quizPaperId);

// 사가 생성
const quizpapersSaga = createRequestSaga(QUIZPAPERS, solveAPI.quizpapers);
const getListQuizPapersSaga = createRequestSaga(GETLISTQUIZPAPERS, solveAPI.getListQuizPapers);
const viewQuizPaperSaga = createRequestSaga(VIEWQUIZPAPER, solveAPI.viewQuizPaper);
const viewNewQuizPaperSaga = createRequestSaga(VIEWNEWQUIZPAPER, solveAPI.viewNewQuizPaper);
export function* solveSaga() {
    // console.log("solve saga success");

    yield takeLatest(QUIZPAPERS, quizpapersSaga);
    yield takeLatest(GETLISTQUIZPAPERS, getListQuizPapersSaga);
    yield takeLatest(VIEWQUIZPAPER, viewQuizPaperSaga);
    yield takeLatest(VIEWNEWQUIZPAPER, viewNewQuizPaperSaga);
}

const initialState = {
    solve: {
        category: '',
        categoryNm: '',
        quizList: {
            all: {},
            started: {},
            except: {},
            checked: {},
        },
        select: {
            quizId: '',
            title: '',
            state: '',
            quizzes: {},
            current: {},
            correctCount: 0,
        },
        result: {}
    },
    papers: {
        size: 1,
        page: 10,
        sort: "RECENCY"
    },
    quizpaper: {
        category: ''
    },
    select: {
        quizzes: {
            quizId: '',
            problem: '',
        }
    },
    checkError: null,
    status: null
};

const solve = handleActions(
    {
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
           [form]: data
        }),
        // 퀴즈 목록 조회 성공
        [QUIZPAPERS_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 퀴즈 목록 조회 실패
        [QUIZPAPERS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 퀴즈 목록 조회(new) 성공
        [GETLISTQUIZPAPERS_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 퀴즈 목록 조회(new) 실패
        [GETLISTQUIZPAPERS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 선택된 퀴즈 조회 성공
        [VIEWQUIZPAPER_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 선택된 퀴즈 조회 실패
        [VIEWQUIZPAPER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 새로운 퀴즈 조회 성공
        [VIEWNEWQUIZPAPER_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 새로운 퀴즈 조회 실패
        [VIEWNEWQUIZPAPER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default solve;