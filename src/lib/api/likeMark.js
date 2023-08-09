import qs from "qs";
import client from "./client";

// 좋아요 설정/해제
export const setLikeMark = quizPaperId => {
    const queryString = qs.stringify({
        quizPaperId
    });
    return client.post(`/api/v1/like?${queryString}`);
};