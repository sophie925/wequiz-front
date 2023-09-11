import styled from "styled-components";
import Spinner from '../../assets/images/spinner2.gif';

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading02 = () => {
    return (
        <Background>
            <img src={Spinner} alt="로딩중" width="10%" />
        </Background>
    );
};

export default Loading02;