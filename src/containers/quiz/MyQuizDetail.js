import QuizDetailList from "../../components/quiz/QuizDetailList";
import { useLocation } from "react-router-dom";

const MyQuizDetail = () => {
    const location = useLocation();
    const { form } = location.state ?? '';
    
    // 초성 만들기 함수
    const cho_hangul = str => {
        const cho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        let code, result = "";
        for (let i = 0; i < str.length; i++) {
            code = str.charCodeAt(i) - 44032;
            if (code > -1 && code < 11172) {
                result += cho[Math.floor(code/588)];
            }
        }
        return result;
    };

    return (
        <QuizDetailList
            type="mine"
            form={form}
            cho_hangul={cho_hangul}
        />
    );
};

export default MyQuizDetail;