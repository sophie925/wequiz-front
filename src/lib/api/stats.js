import client from "./client";

// 사용자 퀴즈 통계 조회
export const getMemberStats = () => client.get('/api/v1/member/stats');