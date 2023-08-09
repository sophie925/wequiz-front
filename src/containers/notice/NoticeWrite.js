import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeField, createNotice, noticeReset } from "../../modules/notice";
import NoticeForm from "../../components/notice/NoticeForm";

const NoticeWrite = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { form, result } = useSelector(({ notice }) => ({
        form: notice.write,
        result: notice.status
    }));

    const onChange = e => {
        const { name, value } = e.target;
        dispatch(
            changeField({
                form: 'write',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { title, content } = form;
        if ([title, content].includes('')) {
            alert("빈 칸을 확인해주세요.");
            return;
        }
        dispatch(createNotice({ title, content }));
    };

    useEffect(() => {
        if (result && result.status === 200) {
            console.log("공지사항 등록 성공:", result);
            navigate('/notice');
            dispatch(noticeReset());
        }
    }, [result, dispatch, navigate]);

    return (
        <NoticeForm
            type="write"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default NoticeWrite;