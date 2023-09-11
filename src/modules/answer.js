import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as answerAPI from '../lib/api/answer';

const RESET_RESULT = 'solve/RESET_RESULT';
const [CHECKQUIZANSWER, CHECKQUIZANSWER_SUCCESS, CHECKQUIZANSWER_FAILURE] = createRequestActionTypes(
    'answer/CHECKQUIZANSWER'
);
export const reset = createAction(RESET_RESULT);
export const checkQuizAnswer = createAction(CHECKQUIZANSWER, ({ quizId, answer }) => ({
    quizId,
    answer
}));
// 사가 생성
const checkQuizAnswerSaga = createRequestSaga(CHECKQUIZANSWER, answerAPI.checkQuizAnswer);
export function* answerSaga() {
    // console.log("answer saga success");

    yield takeLatest(CHECKQUIZANSWER, checkQuizAnswerSaga);
}

const initialState = {
    checkError: null
};

const answer = handleActions(
    {
        [RESET_RESULT]: (state) => ({
            ...state,
            status: null
        }),
        // 퀴즈 정답 확인 성공
        [CHECKQUIZANSWER_SUCCESS]: (state, { payload: status, data }) => ({
            ...state,
            status,
            data,
        }),
        // 퀴즈 정답 확인 실패
        [CHECKQUIZANSWER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default answer;