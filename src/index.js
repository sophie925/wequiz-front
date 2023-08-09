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
import MakeQuizStep2Page from './pages/MakeQuizStep2Page';
import MakeQuizStep3Page from './pages/MakeQuizStep3Page';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ConfirmEmail from './pages/ConfirmEmail';
import AcceptPage from './pages/AccpetPage';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';
import MakeQuizStep1Page from './pages/MakeQuizStep1Page';
import SolveQuizStep1Page from './pages/SolveQuizStep1Page';
import SolveQuizStep2Page from './pages/SolveQuizStep2Page';
import SolveQuizStep3Page from './pages/SolveQuizStep3Page';
import MyQuizListPage from './pages/MyQuizListPage';
import SolveResultPage from './pages/SolveResultPage';
import SolveCheckAnswerPage from './pages/SolveCheckAnswerPage';
import MyQuizDetailPage from './pages/MyQuizDetailPage';
import MyPagePage from './pages/MyPagePage';
import ModifyInfoPage from './pages/ModifyInfoPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SendEmailPage from './pages/SendEmailPage';
import NoticePage from './pages/notice/NoticePage';
import NoticeWritePage from './pages/notice/NoticeWritePage';
import NoticeReadPage from './pages/notice/NoticeReadPage';
import MyInfoPage from './pages/MyInfoPage';
import MyBookmarkListPage from './pages/MyBookmarkListPage';

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
      { path: 'solveStep3', element: <SolveQuizStep3Page /> },
      { path: 'solveResult', element: <SolveResultPage /> },
      { path: 'solveCheckAnswer', element: <SolveCheckAnswerPage /> },
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
    path: 'accept',
    element: <AcceptPage />,
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
