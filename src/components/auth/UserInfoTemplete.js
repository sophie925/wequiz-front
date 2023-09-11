import { MdNavigateBefore } from "react-icons/md";
import { CommonBlock, CommonTopBackLink, CommonTopBlock, CommonTopEndBlock, CommonTopFrontBlock, CommonTopTitle, CommonWrapper } from "../../styles/common/CommonElements";
import { useNavigate } from "react-router-dom";

const titleMap = {
    mypage: '마이페이지',
    myInfo: '회원정보',
    modifyInfo: '회원정보 수정',
    changePassword: '비밀번호 변경',
}

const UserInfoTemplete = ({ type, children }) => {
    const navigate = useNavigate();
    const title = titleMap[type];
    const link = type === "myInfo" ? '/mypage' : '/myInfo';
    return (
        <CommonBlock>
            <CommonWrapper>
                <CommonTopBlock>
                    <CommonTopFrontBlock>
                    {type !== "mypage" && (
                        <CommonTopBackLink onClick={() => navigate(link)}>
                            <MdNavigateBefore />
                        </CommonTopBackLink>
                    )}
                    </CommonTopFrontBlock>
                    <CommonTopTitle>{title}</CommonTopTitle>
                    <CommonTopEndBlock />
                </CommonTopBlock>
                {children}
            </CommonWrapper>
        </CommonBlock>
    );
};

export default UserInfoTemplete;