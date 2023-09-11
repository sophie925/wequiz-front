import { AuthFormBlock, AuthLogoLink, AuthLogoSmallTitle, AuthLogoTitle, AuthLogoWrap, AuthTemplateBlock, WhiteBox } from "../../styles/auth/AuthElements";

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트
 */

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <AuthFormBlock>
                    <AuthLogoWrap>
                        <AuthLogoLink to="/">
                            <AuthLogoTitle>
                                위퀴즈
                                <AuthLogoSmallTitle>함께 즐기는 초성게임</AuthLogoSmallTitle>
                            </AuthLogoTitle>
                        </AuthLogoLink>
                    </AuthLogoWrap>
                    {children}
                </AuthFormBlock>
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;