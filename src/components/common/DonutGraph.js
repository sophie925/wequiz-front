import { AnimatedCircle, DonutGraphBlock, DonutGraphInnerValue } from "../../styles/common/DonutGraphElements";

const DonutGraph = ({ type, correctRate, correctCount, totalCount }) => {
    const rate = type === "mypage" ? Math.round(correctRate) / 100 : correctRate;
    const isCheck = type === "mypage" ? true : false;
    return (
        <DonutGraphBlock>
            <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" strokeWidth="20" />
                <AnimatedCircle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 90}
                    strokeDashoffset={2 * Math.PI * 90 * (1 - rate)}
                />
            </svg>
            {type === "mypage" ? (
                <DonutGraphInnerValue isCheck={isCheck}>
                    <span>정답률</span>
                    <strong>{Math.round(rate * 100)}%</strong>
                </DonutGraphInnerValue>
            ) : (
                <DonutGraphInnerValue isCheck={isCheck}>
                    <strong>{correctCount}</strong>/<strong>{totalCount}</strong>
                </DonutGraphInnerValue>
            )}
        </DonutGraphBlock>
    );
};

export default DonutGraph;