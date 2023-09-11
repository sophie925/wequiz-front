import { CloseIcon, Icon, SideBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from "../../styles/common/SidebarElements";

const Sidebar = ({isOpen, user, onLogout, toggle, onClick }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={() => onClick('/')}>홈</SidebarLink>
                    <SidebarLink onClick={() => onClick('/solve')}>퀴즈풀기</SidebarLink>
                    <SidebarLink onClick={() => onClick('/make')}>퀴즈만들기</SidebarLink>
                    {user ? (
                        <SidebarLink onClick={() => onClick('/mypage')}>마이페이지</SidebarLink>
                    ) : (
                        <SidebarLink onClick={() => onClick('/register')}>회원가입</SidebarLink>
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