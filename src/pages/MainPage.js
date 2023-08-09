import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import HeaderContainer from "../containers/common/HeaderContainer";

const MainPageBlock = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 30px;
`;

const MainPage = () => {
    return (
        <MainPageBlock>
            <HeaderContainer />
            <Wrapper>
                <Outlet />
            </Wrapper>
            <Footer />
        </MainPageBlock>
    );
};

export default MainPage;