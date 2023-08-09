import { MoblieIcon, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu, Nav, NavbarContainer, UserIconLink } from "./NavbarElements";
import { FaBars, FaUserCircle } from "react-icons/fa"

const Navbar = ({ user, toggle }) => {
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
                            <NavLinks to="/solve">퀴즈풀기</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/make">퀴즈만들기</NavLinks>
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