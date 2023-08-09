import client from "./client";

// 퀴즈 정답 확인
export const checkQuizAnswer = ({ quizId, answer }) =>
    client.post(`/api/v1/quiz/${quizId}/check`, { submittedAnswer: answer });