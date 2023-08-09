import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user from './user';
import category, { categorySaga } from './category';
import quiz, { quizSaga } from './quiz';
import solve, { solveSaga } from './solve';
import hint, { hintSaga } from './hint';
import answer, { answerSaga } from './answer';
import email, { emailSaga } from './email';
import notice, { noticeSaga } from './notice';
import bookmark, { bookmarkSaga } from './bookmark';
import likeMark, { likeMarkSaga } from './likeMark';
import stats, { statsSaga } from './stats';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    quiz,
    solve,
    hint,
    category,
    answer,
    email,
    notice,
    bookmark,
    likeMark,
    stats,
});

export function* rootSaga() {
    yield all([authSaga(), quizSaga(), solveSaga(), hintSaga(), categorySaga(), answerSaga(), emailSaga(), noticeSaga(), bookmarkSaga(), likeMarkSaga(), statsSaga(), ]);
}

export default rootReducer;