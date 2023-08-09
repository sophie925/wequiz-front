import { NoticeBackLink, NoticeBlock, NoticeContentBlock, NoticeTopBlock, NoticeTopEndBlock, NoticeTopFrontBlock, NoticeTopTitle, NoticeWrapper } from "./NoticeElements";
import { MdKeyboardBackspace } from "react-icons/md";

const NoticeTemplate = ({ type, children }) => {
    return (
        <NoticeBlock>
            <NoticeWrapper>
                <NoticeTopBlock>
                    <NoticeTopFrontBlock>
                        {type === "main" && (
                            <NoticeBackLink to="/mypage">
                                <MdKeyboardBackspace />
                            </NoticeBackLink>
                        ) }
                    </NoticeTopFrontBlock>
                    <NoticeTopTitle>공지사항</NoticeTopTitle>
                    <NoticeTopEndBlock />
                </NoticeTopBlock>
                <NoticeContentBlock>
                    {children}
                </NoticeContentBlock>
            </NoticeWrapper>
        </NoticeBlock>
    );
};

export default NoticeTemplate;