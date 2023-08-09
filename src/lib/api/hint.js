import client from "./client";

// 힌트 보기
export const viewHint = hintId => client.get(`/api/v1/hint/${hintId}/view`);