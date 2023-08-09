import { createAction, handleActions } from "redux-actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as categoryAPI from '../lib/api/category';

const [GETCATEGORY, GETCATEGORY_SUCCESS, GETCATEGORY_FAILURE] = createRequestActionTypes(
    'category/GETCATEGORY',
);
export const getCategories = createAction(GETCATEGORY);

// 사가 생성
const getCategoriesSaga = createRequestSaga(GETCATEGORY, categoryAPI.getCategories);
export function* categorySaga() {
    console.log("category saga success");

    yield takeLatest(GETCATEGORY, getCategoriesSaga);
}

const initialState = {
    checkError: null,
    status: null,
};

const category = handleActions(
    {
        // 카테고리 조회 성공
        [GETCATEGORY_SUCCESS]: (state, { payload: status, data}) => ({
            ...state,
            status,
            data,
        }),
        // 카테고리 조회 실패
        [GETCATEGORY_FAILURE]: (state, { payload: error }) => ({
            ...state,
            checkError: error,
        }),
    },
    initialState,
);

export default category;