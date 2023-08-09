import qs from "qs";
import client from "./client";

// 북마크 설정/해제
export const setBookmark = quizPaperId => {
    const queryString = qs.stringify({
        quizPaperId
    });
    return client.post(`/api/v1/bookmark?${queryString}`);
};