import client from "./client";

// 퀴즈 만들기
export const make = ({ category, accessibility, title, description, quizzes }) =>
    client.post('/api/v1/quizpaper', {
        category,
        accessibility,
        title,
        description,
        quizzes,
    });
    
// 선택된 퀴즈 상태 확인
export const checkSolvingState = quizPaperId => client.get(`/api/v1/quizpapers/${quizPaperId}/state`);

// 내가 만든 퀴즈 조회
export const mine = () => client.get('/api/v1/quizpapers/mine');

// 북마크한 퀴즈 조회
export const getListBookmarked = () => client.get('/api/v1/quizpapers/bookmarked');

// 최근 진행중인 퀴즈 조회
export const getStartedQuiz = () => client.get('/api/v1/quizpapers/started');