import axios from "axios";

// axios 인스턴스 생성
const client = axios.create();

// axios 요청 인터셉터
client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('user');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// axios 응답 인터셉터
client.interceptors.response.use(
    (response) => {
        // 갱신된 액세스 토큰(x-refresh-token) 있는 경우 다시 저장
        const XRefreshToken = response.headers["x-refresh-token"];
        // console.log("axios response success:", typeof XRefreshToken, '\n',response);
        if (XRefreshToken) {
            localStorage.setItem('user', XRefreshToken);
        }
        return response;
    },
    (error) => {
        const status = error.response.status;
        const statusText = error.response.statusText;
        // console.log("axios response error:", status, statusText, error);
        if (status === 401) {
            if (statusText === "" || statusText === "Unauthorized") {
                localStorage.clear();
                window.alert("로그인 정보가 없거나 시간이 만료되었습니다.\n다시 로그인 해주세요.");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default client;