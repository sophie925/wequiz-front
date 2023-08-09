import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuizForm from "../../components/quiz/QuizForm";
import { getCategories } from "../../modules/category";
import { updateData } from "../../modules/quiz";

const MakeQuizStep01 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { form } = useSelector(({ category }) => ({
        form: category.status,
    }));
    
    const [data, setData] = useState({
        category: '',
        quizCount: 1,
        accessibility: 'PUBLIC',
        title: '',
        description: '',
    });
       
    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    // 카테고리 조회 성공/실패 처리
    useEffect(() => {
        if (form && form.status === 200) {
            console.log("카테고리 조회 성공: ", form);
            // dispatch(initializeForm('make'));
        }
    }, [form]);

    const onCateClick = e => {
        const { name, value, innerText } = e.target;
        console.log(name, ":", value);
        setData({
            ...data,
            [name]: value,
            categoryDispaly: innerText,
        });
        handleModalClose();
    };
    
    const onChange = e => {
        const { name, value, min, max } = e.target;
        console.log(name, ":", value);
        if (name === "quizCount" && value !== "") {
            if (Number(value) < min || Number(value) > max) {
                alert("퀴즈 개수는 1-10개만 입력가능합니다.");
                setData({
                    ...data,
                    [name]: ''
                });
                return;
            }
        }
        setData({
            ...data,
            [name]: name === "quizCount"? Number(value) : value
        });
    };

    const onSelectChange = (e, type) => {
        const value = e.target.value;
        console.log(type, ":", value);
        setData({
            ...data,
            [type]: value
        });
    };
    
    const onPrevClickHandle = e => {
        if (window.confirm('홈 화면으로 이동하시겠습니까?')) {
            navigate('/');
        }
    };
    
    const onNextClickHandle = e => {
        const { category, title, quizCount } = data;
        const newData = { ...data };
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
        console.log(newData);
        dispatch(updateData({ form: 'make', data: newData }));
        navigate('/makeStep2');
    };

    // 카테고리 종류 보여주는 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <QuizForm
            step="step1"
            form={form}
            data={data}
            isModalOpen={isModalOpen}
            onMadalClick={[handleModalOpen, handleModalClose]}
            onCateClick={onCateClick}
            onChange={onChange}
            onSelectChange={onSelectChange}
            onClick={[onPrevClickHandle, onNextClickHandle]}
        />
    );
};

export default MakeQuizStep01;