import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FUILURE`;
    return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FUILURE`;

    return function*(action) {
        yield put(startLoading(type)); // 로딩 시작
        console.log("action: ", action);
        try {
            const response = yield call(request, action.payload);
            console.log("response: ", response);
            yield put({
                type: SUCCESS,
                payload: {
                    status: response.status,
                    data: response.data
                },
            });
        } catch (e) {
            console.log("e: ",e);
            yield put({
                type: FAILURE,
                payload: e, 
                error: true,
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    }
}