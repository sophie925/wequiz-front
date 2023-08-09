import { UserInfoBackLink, UserInfoBlock, UserInfoTitle, UserInfoTopBlock, UserInfoTopEndBlock, UserInfoTopFrontBlock, UserInfoWrapper } from "./UserInfoElement";
import { MdNavigateBefore } from "react-icons/md";

const titleMap = {
    mypage: '마이페이지',
    myInfo: '개인정보',
    modifyInfo: '회원정보 수정',
    changePassword: '비밀번호 변경',
}

const UserInfoTemplete = ({ type, children }) => {
    const title = titleMap[type];
    const link = type === "myInfo" ? '/mypage' : '/myInfo';
    console.log(link);
    return (
        <UserInfoBlock>
            <UserInfoWrapper>
                <UserInfoTopBlock>
                    <UserInfoTopFrontBlock>
                    {type !== "mypage" && (
                        <UserInfoBackLink to={link}>
                            <MdNavigateBefore />
                        </UserInfoBackLink>
                    )}
                    </UserInfoTopFrontBlock>
                    <UserInfoTitle>{title}</UserInfoTitle>
                    <UserInfoTopEndBlock />
                </UserInfoTopBlock>
                {children}
            </UserInfoWrapper>
        </UserInfoBlock>
    );
};

export default UserInfoTemplete;