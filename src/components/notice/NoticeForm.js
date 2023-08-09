import Button from "../common/Button";
import { NoticeBottomWrap, NoticeButtonWrap, NoticeDate, NoticeLi, NoticeLink, NoticeNoneLi, NoticeReadContent, NoticeReadTitle, NoticeReadTitleWrap, NoticeTitle, NoticeUl, NoticeWrap, NoticeWriteItem } from "./NoticeElements";
import dayjs from  "dayjs";

const NoticeForm = ({ type, form, onChange, onClick, onSubmit, onWrite }) => {
    const username = localStorage.getItem('username');
    return (
        <>
            {type === "list" && (
                <>
                    {username === "어드민" ? (
                        <NoticeButtonWrap>
                            <Button white onClick={onWrite}>글쓰기</Button>
                        </NoticeButtonWrap>
                    ) : ''}
                    {form && (
                        <NoticeUl>
                        {form?.data.data?.notices?.length === 0 ? (
                            <NoticeNoneLi>조회된 내용이 없습니다.</NoticeNoneLi>
                        ) : (
                            <>
                                {form.data.data?.notices?.map((notice, index) => (
                                    <NoticeLi key={index}>
                                        <NoticeLink onClick={() => onClick(notice)}>
                                            <NoticeTitle>{notice.title}</NoticeTitle>
                                            <NoticeDate>{dayjs(notice.writtenAt).format('YYYY-MM-DD')}</NoticeDate>
                                        </NoticeLink>
                                    </NoticeLi>
                                ))}
                            </>
                        )}
                        </NoticeUl>
                    )}
                </>
            )}
            {type === "read" && (
                <>
                    {form && (
                        <>
                            <NoticeWrap>
                                <NoticeReadTitleWrap>
                                    <NoticeReadTitle>{form?.data.data?.title}</NoticeReadTitle>
                                    <NoticeDate>{dayjs(form?.data.data?.writtenAt).format('YYYY-MM-DD')}</NoticeDate>
                                </NoticeReadTitleWrap>
                                <NoticeReadContent>{form?.data.data?.content}</NoticeReadContent>
                            </NoticeWrap>
                            <NoticeBottomWrap>
                                <Button medium to="/notice">목록</Button>
                            </NoticeBottomWrap>
                        </>
                    )}
                </>
            )}
            {type === "write" && (
                <NoticeWrap>
                    <form onSubmit={onSubmit} noValidate>
                        <NoticeWriteItem>
                            <label>제목</label>
                            <input
                                type="text"
                                name="title"
                                onChange={onChange}
                                required
                            />
                        </NoticeWriteItem>
                        <NoticeWriteItem>
                            <label>내용</label>
                            <textarea
                                name="content"
                                rows={5}
                                cols={33}
                                onChange={onChange}
                                required
                            ></textarea>
                        </NoticeWriteItem>
                        <NoticeBottomWrap>
                            <Button indigo medium>저장</Button>
                        </NoticeBottomWrap>
                    </form>
                </NoticeWrap>
            )}
        </>
    );
};

export default NoticeForm;