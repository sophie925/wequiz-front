import QuizMakeForm from "../../components/quiz/make/QuizMakeForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategories } from "../../modules/category";
import { updateData } from "../../modules/quiz";

const MakeQuizStep01 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { form } = useSelector(({ category }) => ({
        form: category.status,
    }));
    const { data } = useSelector(({ quiz }) => ({
        data: quiz.make,
    }));

    // 카테고리 종류 보여주는 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // 카테고리 조회 성공/실패 처리
    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("카테고리 조회 성공: ", form);
        }
    }, [form]);

    // 카테고리 선택 버튼 클릭 시
    const onCateClick = e => {
        const { name, value, innerText } = e.target;
        dispatch(updateData({
            form: 'make',
            data: {
                ...data,
                [name]: value,
                categoryDispaly: innerText,
            }
        }));
        handleModalClose();
    };
    
    const onChange = (e, type) => {
        const { value, min, max } = e.target;
        const name = type ? type : e.target.name;
        if (name === "quizCount" && value !== "") {
            if (Number(value) < min || Number(value) > max) {
                alert("퀴즈 개수는 1-10개만 입력가능합니다.");
                dispatch(updateData({
                    form: 'make',
                    data: { ...data, [name]: '' }
                }));
                return;
            }
        }
        dispatch(updateData({
            form: 'make',
            data: { ...data, [name]: name === "quizCount"? Number(value) : value }
        }));
    };
    
    // 다음 클릭 시
    const onClick = e => {
        const { category, title, quizCount } = data;
        // 하나라도 비어 있다면
        if ([category, title].includes('')) {
            alert('퀴즈제목, 카테고리를 확인해주세요.');
            return;
        }
        //퀴즈개수 확인
        if (quizCount < 1 || quizCount > 10) {
            alert("퀴즈 개수를 확인해주세요.");
            return;
        }
        navigate('/makeStep2');
    };

    return (
        <QuizMakeForm
            step="step1"
            form={form}
            data={data}
            onChange={onChange}
            isModalOpen={isModalOpen}
            onMadalClick={[handleModalOpen, handleModalClose]}
            onCateClick={onCateClick}
            onClick={onClick}
        />
    );
};

export default MakeQuizStep01;