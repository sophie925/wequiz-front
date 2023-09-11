import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NoticeForm from "../../components/notice/NoticeForm";
import { listNotices, noticeReset, updateData } from "../../modules/notice";

const Notice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form } = useSelector(({ notice }) => ({
        form: notice.status
    }));

    useEffect(() => {
        dispatch(noticeReset());
        dispatch(listNotices({ page: 1, size: 10 }));
    }, [dispatch]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("공지사항 목록 조회 성공", form);
        }
    }, [form]);

    const onClick = value => {
        dispatch(noticeReset());
        const { id } = value;
        dispatch(updateData({ form: 'read', data: { id: id } }));
        navigate("/read");
    };
    
    // 글쓰기 클릭 시 - 관리자(ADMIN)만 사용 가능
    const onWrite = () => {
        navigate("/write");
        dispatch(noticeReset());
    };
    
    return (
        <NoticeForm
            type="list"
            form={form}
            onClick={onClick}
            onWrite={onWrite}
        />
    );
};

export default Notice;