import { CloseIcon, Icon, SideBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from "./SidebarElements";

const Sidebar = ({isOpen, user, onLogout, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>홈</SidebarLink>
                    <SidebarLink to="/solve" onClick={toggle}>퀴즈풀기</SidebarLink>
                    <SidebarLink to="/make" onClick={toggle}>퀴즈만들기</SidebarLink>
                    {user ? (
                        <SidebarLink to="/mypage" onClick={toggle}>마이페이지</SidebarLink>
                    ) : (
                        <SidebarLink to="/register" onClick={toggle}>회원가입</SidebarLink>
                    )}
                </SidebarMenu>
                <SideBtnWrap>
                {user ? (
                    <SidebarRoute onClick={onLogout}>로그아웃</SidebarRoute>
                ) : (
                    <SidebarRoute to="/login">로그인</SidebarRoute>
                )}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;