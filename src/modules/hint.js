import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as hintAPI from '../lib/api/hint';

const RESET_RESULT = 'hint/RESET_RESULT';
const [VIEWHINT, VIEWHINT_SUCCESS, VIEWHINT_FAILURE] = createRequestActionTypes(
    'hint/VIEWHINT'
);

export const hintReset = createAction(RESET_RESULT);
export const viewHint = createAction(VIEWHINT, hintId => hintId);

// 사가 생성
const viewHintSaga = createRequestSaga(VIEWHINT, hintAPI.viewHint);
export function* hintSaga() {
    // console.log("hint saga success");

    yield takeLatest(VIEWHINT, viewHintSaga);
}

const initialState = {
    checkError: null,
    status: null
};

const hint = handleActions(
    {
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 힌트 조회 성공
        [VIEWHINT_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 힌트 조회 실패
        [VIEWHINT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default hint;