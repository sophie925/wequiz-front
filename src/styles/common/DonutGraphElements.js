import styled from "styled-components";
import oc from "open-color";

export const DonutGraphBlock = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    svg {
        transform: rotate(-90deg);
        circle {
            stroke: ${oc.gray[4]};
        }
    }
`;

export const DonutGraphInnerValue = styled.div`
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

export const AnimatedCircle = styled.circle`
    animation: circle-fill-animation 2s ease-in-out forwards;
    @keyframes circle-fill-animation {
        0% {
            stroke-dashoffset: ${2 * Math.PI * 90};
            stroke: ${oc.indigo[8]};
        }
        100% {
            stroke: ${oc.indigo[8]};
        }
    }
`;