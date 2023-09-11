import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as statsAPI from '../lib/api/stats';

const RESET_RESULT = 'stats/RESET_RESULT';
const [GETMEMBERSTATS, GETMEMBERSTATS_SUCCESS, GETMEMBERSTATS_FAILURE] = createRequestActionTypes(
    'stats/GETMEMBERSTATS',
);

export const statskReset = createAction(RESET_RESULT);
export const getMemberStats = createAction(GETMEMBERSTATS);

// 사가 생성
const getMemberStatsSaga = createRequestSaga(GETMEMBERSTATS, statsAPI.getMemberStats);
export function* statsSaga() {
    // console.log("stats saga success");

    yield takeLatest(GETMEMBERSTATS, getMemberStatsSaga);
}

const initialState = {
    checkError: null,
    status: null,
};

const stats = handleActions(
    {
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 사용자 퀴즈 통계 성공
        [GETMEMBERSTATS_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 사용자 퀴즈 통계 실패
        [GETMEMBERSTATS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default stats;