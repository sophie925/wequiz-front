import styled from "styled-components";
import oc from "open-color";

const DonutGraphBlock = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    svg {
        transform: rotate(-90deg);
    }
`;

const DonutGraphInnerValue = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({isCheck}) => (isCheck ? 'column' : '')};
    color: ${({isCheck}) => (isCheck ? '' : '#f2f2f2')};
    span {
        font-size: 12px;
        margin-bottom: 3px;
        font-weight: bold;
    }

    strong:first-child {
        font-size: 24px;
    }
`;

const AnimatedCircle = styled.circle`
    animation: circle-fill-animation 2s ease-in-out forwards;
    @keyframes circle-fill-animation {
        0% {
            stroke-dashoffset: ${2 * Math.PI * 90};
        }
    }
`;

const DonutGraph = ({ type, correctRate, correctCount, totalCount }) => {
    const rate = type === "mypage" ? Math.round(correctRate) / 100 : correctRate;
    const isCheck = type === "mypage" ? true : false;
    return (
        <DonutGraphBlock>
            <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="none" stroke={`${oc.gray[4]}`} strokeWidth="20" />
                <AnimatedCircle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke={`${oc.indigo[8]}`}
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