import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as noticeAPI from '../lib/api/notice';

const CHANGE_FIELD = 'notice/CHANGE_FIELD';
const RESET_RESULT = 'notice/RESET_RESULT';
const UPDATE_DATA = 'notice/UPDATE_DATA';

const [CREATENOTICE, CREATENOTICE_SUCCESS, CREATENOTICE_FAILURE] = createRequestActionTypes(
    'notice/CREATENOTICE',
);
const [MODIFYNOTICE, MODIFYNOTICE_SUCCESS, MODIFYNOTICE_FAILURE] = createRequestActionTypes(
    'notice/MODIFYNOTICE'
);
const [LISTNOTICES, LISTNOTICES_SUCCESS, LISTNOTICES_FAILURE] = createRequestActionTypes(
    'notice/LISTNOTICES',
);
const [VIEWCONTENT, VIEWCONTENT_SUCCESS, VIEWCONTENT_FAILURE] = createRequestActionTypes(
    'notice/VIEWCONTENT',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);
export const noticeReset = createAction(RESET_RESULT);
export const updateData = createAction(
    UPDATE_DATA,
    ({ form, data }) => ({
        form,
        data
    })
);
export const createNotice = createAction(CREATENOTICE, ({ title, content }) => ({
    title,
    content,
}));
export const modifyNotice = createAction(MODIFYNOTICE, ({ noticeId, title, content }) => ({
    noticeId,
    title,
    content,
}));
export const listNotices = createAction(LISTNOTICES);
export const viewContent = createAction(VIEWCONTENT, noticeId => noticeId);

// 사가 생성
const createNoticeSaga = createRequestSaga(CREATENOTICE, noticeAPI.createNotice);
const modifyNoticeSaga = createRequestSaga(MODIFYNOTICE, noticeAPI.modifyNotice);
const listNoticesSaga = createRequestSaga(LISTNOTICES, noticeAPI.listNotices);
const viewContentSaga = createRequestSaga(VIEWCONTENT, noticeAPI.viewContent);
export function* noticeSaga() {
    console.log("notice saga success");

    yield takeLatest(CREATENOTICE, createNoticeSaga);
    yield takeLatest(MODIFYNOTICE, modifyNoticeSaga);
    yield takeLatest(LISTNOTICES, listNoticesSaga);
    yield takeLatest(VIEWCONTENT, viewContentSaga);
}

const initialState = {
    write: {
        title: '',
        content: ''
    },
    read: {
        id: ''
    },
    checkError: null,
    status: null
};

const notice = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => 
            produce(state, draft => {
                draft[form][key] = value;
        }),
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        [UPDATE_DATA]: (state, { payload: { form, data } }) => ({
            ...state,
           [form]: data
        }),
        // 공지사항 등록 성공
        [CREATENOTICE_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 공지사항 등록 실패
        [CREATENOTICE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 공지사항 수정 성공
        [MODIFYNOTICE_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 공지사항 수정 실패
        [MODIFYNOTICE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 공지사항 목록 조회 성공
        [LISTNOTICES_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 공지사항 목록 조회 실패
        [LISTNOTICES_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
        // 공지사항 내용 조회 성공
        [VIEWCONTENT_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 공지사항 내용 조회 실패
        [VIEWCONTENT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default notice;