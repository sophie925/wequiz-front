import { useEffect } from "react";
import { useDispatch, useSelector } from "../../../node_modules/react-redux/es/exports";
import NoticeForm from "../../components/notice/NoticeForm";
import { viewContent } from "../../modules/notice";

const NoticeRead = () => {
    const dispatch = useDispatch();
    const { data, form } = useSelector(({ notice }) => ({
        data: notice.read,
        form: notice.status
    }));
    console.log("공지사항 상세조회", data);

    useEffect(() => {
        const { id } = data;
        dispatch(viewContent(id));
    }, [data, dispatch]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("공지사항 상세조회 성공", form);
        }
    }, [form]);

    return (
        <NoticeForm
            type="read"
            form={form}
        />
    );
};

export default NoticeRead;