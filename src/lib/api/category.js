import client from "./client";

// 카테고리 조회
export const getCategories = () => client.get('/api/v1/categories');