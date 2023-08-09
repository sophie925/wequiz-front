import NoticeTemplate from "../../components/notice/NoticeTemplate";
import Notice from "../../containers/notice/Notice";

const NoticePage = () => {
    return (
        <NoticeTemplate type="main">
            <Notice />
        </NoticeTemplate>
    );
};

export default NoticePage;