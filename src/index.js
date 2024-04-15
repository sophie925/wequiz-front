import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/font.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer,{ rootSaga } from './modules';
import { tempSetUser } from './modules/user';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MakeQuizStep2Page from './pages/quiz/MakeQuizStep2Page';
import MakeQuizStep3Page from './pages/quiz/MakeQuizStep3Page';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ConfirmEmail from './pages/auth/ConfirmEmail';
import CreateAccountPage from './pages/auth/CreateAccountPage';
import HomePage from './pages/HomePage';
import MakeQuizStep1Page from './pages/quiz/MakeQuizStep1Page';
import SolveQuizStep1Page from './pages/quiz/SolveQuizStep1Page';
import SolveQuizStep2Page from './pages/quiz/SolveQuizStep2Page';
import MyQuizListPage from './pages/quiz/MyQuizListPage';
import SolveResultPage from './pages/quiz/SolveResultPage';
import SolveAnswerResultPage from './pages/quiz/SolveAnswerResultPage';
import MyQuizDetailPage from './pages/quiz/MyQuizDetailPage';
import MyPagePage from './pages/auth/MyPagePage';
import ModifyInfoPage from './pages/auth/ModifyInfoPage';
import ChangePasswordPage from './pages/auth/ChangePasswordPage';
import TermsPage from './pages/policy/TermsPage';
import PrivacyPage from './pages/policy/PrivacyPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SendEmailPage from './pages/auth/SendEmailPage';
import NoticePage from './pages/notice/NoticePage';
import NoticeWritePage from './pages/notice/NoticeWritePage';
import NoticeReadPage from './pages/notice/NoticeReadPage';
import MyInfoPage from './pages/auth/MyInfoPage';
import MyBookmarkListPage from './pages/quiz/MyBookmarkListPage';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아니라면 아무것도 안 함

    store.dispatch(tempSetUser(user));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

//일단 라우팅은 성공했으나, 여기에 작성하는게 좋은건지 다시 찾아보기
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'mypage', element: <MyPagePage /> },
      { path: 'myInfo', element: <MyInfoPage /> },
      { path: 'modifyInfo', element: <ModifyInfoPage /> },
      { path: 'changePassword', element: <ChangePasswordPage /> },
      { path: 'mine', element: <MyQuizListPage /> },
      { path: 'bookmark', element: <MyBookmarkListPage /> },
      { path: 'detail', element: <MyQuizDetailPage /> },
      { path: 'make', element: <MakeQuizStep1Page /> },
      { path: 'makeStep2', element: <MakeQuizStep2Page /> },
      { path: 'makeStep3', element: <MakeQuizStep3Page /> },
      { path: 'solve', element: <SolveQuizStep1Page /> },
      { path: 'solveStep2', element: <SolveQuizStep2Page /> },
      { path: 'solveResult', element: <SolveResultPage /> },
      { path: 'solveAnswerResult', element: <SolveAnswerResultPage /> },
    ]
  },
  {
    path: 'notice',
    element: <NoticePage />,
  },
  {
    path: 'write',
    element: <NoticeWritePage />,
  },
  {
    path: 'read',
    element: <NoticeReadPage />,
  },
  {
    path: 'terms',
    element: <TermsPage />,
  },
  {
    path: 'privacy',
    element: <PrivacyPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'sendEmail',
    element: <SendEmailPage />,
  },
  {
    path: 'resetPassword',
    element: <ResetPasswordPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'confirm',
    element: <ConfirmEmail />,
  },
  {
    path: 'create',
    element: <CreateAccountPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
