import Timer from "../../components/quiz/Timer";
import { useState, useEffect } from "react";

const TimerContainer = ({ checkTime, setIsTimeOverrun }) => {
    const [minutes, setMinutes] = useState(parseInt(1));
    const [seconds, setSeconds] = useState(parseInt(0));
    
    // 타이머 계산하는 로직
    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    setIsTimeOverrun(true);
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        
        return () => clearInterval(countdown);
    }, [minutes, seconds, setIsTimeOverrun]);
    
    useEffect(() => {
        // 시간 초기화
        if (checkTime) {
            setTimeout(() => {
                setMinutes(parseInt(1));
                setSeconds(parseInt(0));
            }, 1000);
        }
    }, [checkTime]);

    return (
        <Timer minutes={minutes} seconds={seconds} />
    );
};

export default TimerContainer;