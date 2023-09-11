import { MdNavigateBefore } from "react-icons/md";
import { AuthTemplateBlock, WhiteBox } from "../../styles/auth/AuthElements";
import { AuthOtherBackLink, AuthOtherFormBlock, AuthOtherTitle, AuthOtherTopBlock, AuthOtherTopEndBlock, AuthOtherTopFrontBlock } from "../../styles/auth/AuthOtherElements";

/**
 * 계정 생성/이메일 전송/비밀번호 재설정 페이지의 레이아웃을 담당하는 컴포넌트
 */

const textMap = {
    create: '계정 생성',
    send: '이메일 전송',
    reset: '비밀번호 재설정',
};

const AuthOtherTemplate = ({ type, children }) => {
    const title = textMap[type];
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <AuthOtherFormBlock>
                    <AuthOtherTopBlock>
                        <AuthOtherTopFrontBlock>
                            {type === "send" && (
                                <AuthOtherBackLink to="/login">
                                    <MdNavigateBefore />
                                </AuthOtherBackLink>
                            )}
                        </AuthOtherTopFrontBlock>
                        <AuthOtherTitle>{title}</AuthOtherTitle>
                        <AuthOtherTopEndBlock />
                    </AuthOtherTopBlock>
                    {children}
                </AuthOtherFormBlock>
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthOtherTemplate;