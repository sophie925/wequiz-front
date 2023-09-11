import { FaBars, FaUserCircle } from "react-icons/fa"
import { MoblieIcon, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, Nav, NavbarContainer, UserIconLink } from "../../styles/common/NavbarElements";

const Navbar = ({ user, toggle, onClick }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <p>위퀴즈<span>함께 즐기는 초성게임</span></p>
                    </NavLogo>
                    <MoblieIcon onClick={toggle}>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks onClick={() => onClick("/solve")}>퀴즈풀기</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={() => onClick("/make")}>퀴즈만들기</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {user ? (
                            <UserIconLink to="/mypage">
                                <FaUserCircle />
                            </UserIconLink>
                        ) : (
                            <NavBtnLink to="/login">로그인</NavBtnLink>
                        )}
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    );
};

export default Navbar;