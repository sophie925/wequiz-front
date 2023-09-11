import qs from 'qs';
import client from "./client";

// 공지사항 목록 조회
export const listNotices = ({ page, size }) => {
    const queryString = qs.stringify({
        page,
        size
    });
    return client.get(`/api/v1/notices?${queryString}`);
};

// 공지사항 내용 조회
export const viewContent = noticeId => client.get(`/api/v1/notice/${noticeId}`);

// 공지사항 등록
export const createNotice = ({ title, content }) =>
    client.post('/api/v1/notice', {
        title,
        content
    });

// 공지사항 수정
export const modifyNotice = ({ noticeId, title, content }) =>
    client.put(`/api/v1/notice/${noticeId}`, {
        title,
        content
    });