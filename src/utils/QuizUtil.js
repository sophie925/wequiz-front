// 카테고리 맵
export const categoryMap = {
    GENERAL_KNOWLEDGE: '일반상식',
    MUSIC: '음악',
    MOVIE: '영화',
    TV_SHOW: '드라마/예능',
    HISTORY: '역사',
    SCIENCE: '과학',
    ENTERTAINMENT: '오락',
    ART: '예술',
    SOCIAL: '사회',
    LIVING: '생활/삶',
    ETC: '기타'
};

// 초성 생성 함수
export const changeInitialConsonant = (value) => {
    const cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
    let code, result = "";
    for (let i = 0; i < value.length; i++) {
        code = value.charCodeAt(i) - 44032;
        if (code > -1 && code < 11172) {
            result += cho[Math.floor(code/588)];
        }
    }
    return result;
};