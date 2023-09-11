import styled from "styled-components";
import kakaoImg from "../../assets/images/icon-kakao.png";
import { shareKakao, shareKakaoUrl } from "../../utils/ShareKakaoLink";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ShareFormBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const ShareBtnWrap = styled.div`
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    cursor: pointer;
`;
const ShareUrlWrap = styled.div`
    display: flex;
    input {
        border: 1px solid #ddd;
        border-radius: 3px 0 0 3px;
        padding: 10px 15px;
    }
    button {
        padding: 10px 15px;
    }
`;

const ShareKaKaoForm = ({ data }) => {
    const textInput = useRef();
    const [hiddenUrl, setHiddenUrl] = useState("");
    const [copyUrl, setCopyUrl] = useState("");

    useEffect(() => {
        // JSON 형태로 숨긴 데이터 URL로 만들기
        const hiddenData = encodeURIComponent(JSON.stringify(data));
        const h_url = `solveStep2?data=${hiddenData}`;
        const c_url = `https://dev.wequiz.co.kr/solveStep2?data=${hiddenData}`
        setHiddenUrl(h_url);
        setCopyUrl(c_url);
    }, [data]);

    return (
        <ShareFormBlock>
            <ShareBtnWrap onClick={() => shareKakao(hiddenUrl)}>
                <img src={kakaoImg} alt="카카오 공유하기 아이콘" />
                <span>카카오톡</span>
            </ShareBtnWrap>
            <ShareUrlWrap>
                <input
                    type="text"
                    defaultValue={copyUrl}
                    ref={textInput}
                    readOnly 
                />
                <button onClick={() => shareKakaoUrl(textInput.current.value)}>복사</button>
            </ShareUrlWrap>
        </ShareFormBlock>
    );
};

export default ShareKaKaoForm;