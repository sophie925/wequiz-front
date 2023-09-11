export const shareKakao = (url) => {
    if (window.Kakao) {
        const kakao = window.Kakao;

        if (!kakao.isInitialized()) {
            kakao.init('89ffc589c49148583862f33739be1ef5');
        }
        kakao.Share.sendCustom({
            templateId: 96901,
            templateArgs: {
                title: '두둥 퀴즈가 도착했어요🎈',
                desc: '어서 퀴즈를 풀어보세요 :)',
                path: url
            },
        });
    }
};

export const shareKakaoUrl = async (url) => {
    try {
        await navigator.clipboard.writeText(url);
        alert("링크가 복사되었어요.");
    } catch (e) {
        console.log(e);
    }
};