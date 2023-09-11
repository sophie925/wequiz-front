import { MdKeyboardBackspace } from "react-icons/md";
import { NoticeBlock, NoticeWrapper } from "../../styles/notice/NoticeElements";
import { CommonTopBackLink, CommonTopBlock, CommonTopEndBlock, CommonTopFrontBlock, CommonTopTitle } from "../../styles/common/CommonElements";
import { useNavigate } from "react-router-dom";

const NoticeTemplate = ({ type, children }) => {
    const navigate = useNavigate();
    return (
        <NoticeBlock>
            <NoticeWrapper>
                <CommonTopBlock>
                    <CommonTopFrontBlock isCheck={true}>
                        {type === "main" && (
                            <CommonTopBackLink onClick={() => navigate("/mypage")}>
                                <MdKeyboardBackspace />
                            </CommonTopBackLink>
                        ) }
                    </CommonTopFrontBlock>
                    <CommonTopTitle>공지사항</CommonTopTitle>
                    <CommonTopEndBlock />
                </CommonTopBlock>
                {children}
            </NoticeWrapper>
        </NoticeBlock>
    );
};

export default NoticeTemplate;