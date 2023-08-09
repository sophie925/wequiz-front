import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as likeMarkAPI from '../lib/api/likeMark';

const RESET_RESULT = 'likeMark/RESET_RESULT';
const [SETLIKEMARK, SETLIKEMARK_SUCCESS, SETLIKEMARK_FAILURE] = createRequestActionTypes(
    'likeMark/SETLIKEMARK'
);

export const likeMarkReset = createAction(RESET_RESULT);
export const setLikeMark = createAction(SETLIKEMARK, quizPaperId => quizPaperId);

// 사가 생성
const setLikeMarkSaga = createRequestSaga(SETLIKEMARK, likeMarkAPI.setLikeMark);
export function* likeMarkSaga() {
    console.log("likeMark saga success");

    yield takeLatest(SETLIKEMARK, setLikeMarkSaga);
}

const initialState = {
    checkError: null
};

const likeMark = handleActions(
    {
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 좋아요 설정/해제 성공
        [SETLIKEMARK_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 좋아요 설정/해제 실패
        [SETLIKEMARK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default likeMark;