import qs from 'qs';
import client from "./client";

// 퀴즈 목록 조회
export const quizpapers = ({ category }) => {
    const queryString = qs.stringify({
        category,
    });
    return client.get(`/api/v1/quizpapers?${queryString}`);
};

// 퀴즈 목록 조회(new)
export const getListQuizPapers = ({ page, size, category, status, sort }) => {
    const queryString = qs.stringify({
        page,
        size,
        category,
        status,
        sort
    }, { arrayFormat: 'repeat' });
    return client.get(`/api/v2/quizpapers?${queryString}`);
};

// 선택된 퀴즈 조회
export const viewQuizPaper = quizPaperId => client.get(`/api/v1/quizpapers/${quizPaperId}/`);

// 새로운 퀴즈 조회
export const viewNewQuizPaper = quizPaperId => client.get(`/api/v1/quizpapers/${quizPaperId}/new`);