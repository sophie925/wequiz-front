import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineHorizontalRule } from "react-icons/md";
import { StateCheckIcon, DropDownBlock, DropDownBtn, DropDownContent, DropDownItem, QuizListTitleBlock, QuizListWrap, StateRunningIcon, StateItem, TagBlock, CategoryBoxItem, SortItem, SelectIcon, LoadingWrap } from "../../styles/quiz/QuizSolveElements";
import QuizListContainer from "./QuizListContainer";
import Tag from "../../components/common/Tag";
import Loading02 from "../../components/common/Loading02";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../modules/category";
import { quizReset } from "../../modules/quiz";
import { getListQuizPapers, solveReset } from "../../modules/solve";

const SolveQuizStep01 = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ category }) => ({
        form: category.status,
    }));
    const { form2 } = useSelector(({ solve }) => ({
        form2: solve.status
    }));
    const [categories, setCategories] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cateList, setCateList] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const [stateItem, setStateItem] = useState([]);
    const [sort, setSort] = useState("RECENCY");
    const [tagList, setTagList] = useState([]);

    const resetData = () => {
        // 초기화
        setPage(1);
        setQuizData([]);
        setLoading(false);
    };

    // 카테고리 조회
    useEffect(() => {
        resetData();
        dispatch(solveReset());
        dispatch(quizReset());
        dispatch(getCategories());
    }, [dispatch]);

    // 카테고리 조회 성공/실패 처리
    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("카테고리 조회 성공: ", form, page, loading);
            setCategories(form.data.data);
            dispatch(getListQuizPapers({ page: page, size: 5, category: cateList, status: stateItem[0], sort: sort }));
        }
    }, [form, dispatch, page, cateList, stateItem, sort]);

    // 무한스크롤 적용
    const pageEnd = useRef(null);
    const loadMore = () => setPage(prev => prev + 1);
    useEffect(() => {
        if (loading) {
            const targetElement = pageEnd.current;
            const observe = new IntersectionObserver(
                entries => {
                    if (entries[0].isIntersecting) {
                        loadMore();
                    }
                },
                { threshold: 0.9 }
            );
            observe.observe(targetElement);
        }
    }, [loading]);

    // 퀴즈 목록(new) 조회 api 호출 후 로직
    useEffect(() => {
        // 현재 페이지에 따른 퀴즈 데이터 셋팅
        const handlePageLogic = (totalPages, quizPapers) => {
            if (page < totalPages) {
                setQuizData((prev) => [...prev, ...quizPapers]);
                setTimeout(() => setLoading(true), 1000);
            } else {
                if (quizPapers.length === 0) {
                    setQuizData([]);
                } else {
                    setQuizData((prev) => [...prev, ...quizPapers]);
                }
            }
        }
        if (form2 && form2.status === 200) {
            console.log("퀴즈 목록(new) 조회 성공", form2);
            const { pagination, quizPapers } = form2?.data.data;
            setLoading(false);
            setPagination(pagination);
            // 퀴즈 데이터 셋팅 함수
            handlePageLogic(pagination.totalPages, quizPapers);
        }
    }, [form2]);

    const [isShow, setIsShow] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isStateOpen, setIsStateOpen] = useState(false);

    // 드롭다운 박스 오픈 관련 이벤트
    const onClickDropDown = (type) => {
        if (type === "category") {
            setIsCategoryOpen((prevState) => !prevState);
            setIsStateOpen(false);
            setIsShow(false);
        } else if (type === "state") {
            setIsStateOpen((prevState) => !prevState);
            setIsCategoryOpen(false);
            setIsShow(false);
        } else {
            setIsShow((prevState) => !prevState);
            setIsCategoryOpen(false);
            setIsStateOpen(false);
        }
    };

    // 상태, 카테고리 박스 내 요소 클릭 시
    const onClickBoxItem = (type, e) => {
        resetData();
        if (type === "state") {
            const { id, innerText } = e.target;
            setStateItem([id, innerText]);
            submitStateTagItem(innerText);
            setIsStateOpen(false);
        } else if (type === "category") {
            const { category, categoryDisplay } = e;
            let updatedCateList = [...cateList];
            if (cateList.includes(category)) {
                updatedCateList = updatedCateList.filter(cateItem => cateItem !== category);
                setCateList(updatedCateList);
            } else {
                updatedCateList.push(category);
                setCateList(updatedCateList);
            }
            submitCateTagItem(categoryDisplay);
        } else if (type === "sort") {
            const { id } = e.target;
            setSort(id);
            setIsShow(false);
        }
    };

    // 카테고리 박스 내 선택된 요소 표시
    const checkCate = (type, value) => {
        const findIdx = form.data.data.findIndex((v) => v.categoryDisplay === value);
        const isCheck = type === "C" ? true : false;
        const updatedCheckList = [...checkList];
        updatedCheckList[findIdx] = isCheck;
        setCheckList(updatedCheckList);
    };

    // 상태 태그 생성
    const submitStateTagItem = (item) => {
        const checkTag = tagItem => tagItem.includes(stateItem[1]);
        if (tagList.some(checkTag)) {
            const filteredTag = tagList.filter(tagItem => !tagItem.includes(stateItem[1]));
            setTagList(filteredTag);
        }
        setTagList(prevTagList => [...prevTagList, item]);
    }

    // 카테고리 태그 생성
    const submitCateTagItem = (item) => {
        if (tagList.includes(item)) {
            const filteredTagList = tagList.filter(tagItem => tagItem !== item);
            setTagList(filteredTagList);
            checkCate("D", item);
        } else {
            let updatedTagList = [...tagList];
            updatedTagList.push(item);
            setTagList(updatedTagList);
            checkCate("C", item);
        }
    };

    // 조건 태그 삭제시 수행할 로직
    const findBoxItem = (item) => {
        resetData();
        const chkCate = categories.some((v) => v.categoryDisplay === item);
        // category인 경우
        if (chkCate) {
            const findIdx = categories.findIndex((v) => v.categoryDisplay === item);
            let filteredCateList = cateList.filter(cateItem => cateItem !== categories[findIdx].category);
            setCateList(filteredCateList);
        }
        // state 인 경우
        else {
            setStateItem([]);
        }
    };

    // 조건 태그 삭제
    const deleteTagItem = e => {
        const deleteTagItem = e.target.parentElement.firstChild.innerText;
        const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem);
        setTagList(filteredTagList);
        checkCate("D", deleteTagItem);
        findBoxItem(deleteTagItem);
    };

    return (
        <>
            <DropDownBlock>
                <DropDownItem>
                    <DropDownBtn onClick={() => onClickDropDown("state")}>
                        상태 {isStateOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
                    </DropDownBtn>
                    <DropDownContent isShow={isStateOpen} isCate={false}>
                        <StateItem id="NONE" onClick={e => onClickBoxItem("state", e)}>
                            <MdOutlineHorizontalRule /> 안 푼 퀴즈 
                        </StateItem>
                        <StateItem id="COMPLETED" onClick={e => onClickBoxItem("state", e)}>
                            <StateCheckIcon /> 푼 퀴즈 
                        </StateItem>
                        <StateItem id="STARTED" onClick={e => onClickBoxItem("state", e)}>
                            <StateRunningIcon /> 진행중 퀴즈 
                        </StateItem>
                    </DropDownContent>
                </DropDownItem>
                <DropDownItem>
                    <DropDownBtn onClick={() => onClickDropDown("category")}>
                        카테고리 {isCategoryOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
                    </DropDownBtn>
                    <DropDownContent isShow={isCategoryOpen} isCate={true}>
                        {categories && categories.map((value, index) => (
                            <CategoryBoxItem key={index} isCheck={checkList[index]}
                                onClick={() => onClickBoxItem("category", value)}>{value.categoryDisplay}</CategoryBoxItem>
                        ))}
                    </DropDownContent>
                </DropDownItem>
            </DropDownBlock>
            <TagBlock>
                {tagList && <Tag tags={tagList} onClick={deleteTagItem} />}
            </TagBlock>
            <QuizListWrap>
                <QuizListTitleBlock>
                    <h3>{pagination?.totalCount}개 퀴즈</h3>
                    <p onClick={() => onClickDropDown()}>
                        {sort === "RECENCY" ? '최신순' : '인기순'} {isShow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
                    </p>
                    <DropDownContent isShow={isShow} isSort={true}>
                        <SortItem id="RECENCY" onClick={e => onClickBoxItem("sort", e)}>
                            최신순 {sort === "RECENCY" ? <SelectIcon /> : ''}
                        </SortItem>
                        <SortItem id="POPULARITY" onClick={e => onClickBoxItem("sort", e)}>
                            인기순 {sort === "POPULARITY" ? <SelectIcon /> : ''}
                        </SortItem>
                    </DropDownContent>
                </QuizListTitleBlock>
                <QuizListContainer
                    type="solve"
                    form={quizData}
                />
                {loading && (
                    <LoadingWrap ref={pageEnd}>
                        <Loading02 />
                    </LoadingWrap>
                )}
            </QuizListWrap>
        </>
    );
};

export default SolveQuizStep01;