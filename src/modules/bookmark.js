import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as bookmarkAPI from '../lib/api/bookmark';

const RESET_RESULT = 'bookmark/RESET_RESULT';
const [SETBOOKMARK, SETBOOKMARK_SUCCESS, SETBOOKMARK_FAILURE] = createRequestActionTypes(
    'bookmark/SETBOOKMARK'
);

export const bookmarkReset = createAction(RESET_RESULT);
export const setBookmark = createAction(SETBOOKMARK, quizPaperId => quizPaperId);

// 사가 생성
const setBookmarkSaga = createRequestSaga(SETBOOKMARK, bookmarkAPI.setBookmark);
export function* bookmarkSaga() {
    // console.log("bookmark saga success");

    yield takeLatest(SETBOOKMARK, setBookmarkSaga);
}

const initialState = {
    checkError: null
};

const bookmark = handleActions(
    {
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 북마크 설정/해제 성공
        [SETBOOKMARK_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 북마크 설정/해제 실패
        [SETBOOKMARK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default bookmark;