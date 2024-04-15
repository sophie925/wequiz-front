import styled from "styled-components";
import oc from 'open-color'

const ProgressBarBlock = styled.div`
    display: flex;
    flex-direction: column;
    height: 8px;
    flex-direction: row;
    width: 100%;
    background-color: #eeeeee;
    border-radius: 10px;
    margin-bottom: 40px;
`;

const ProgressBar = (props) => {
    const barStyle = {
        width: `${Math.round((props.index*10)*(10/props.length))}%`,
        height: '8px',
        backgroundColor: `${oc.yellow[5]}`,
        borderRadius: '10px',
        transition: 'width 0.1s ease-in-out'
    };

    return (
        <ProgressBarBlock>
            <div style={barStyle} />
        </ProgressBarBlock>
    );
};

export default ProgressBar;