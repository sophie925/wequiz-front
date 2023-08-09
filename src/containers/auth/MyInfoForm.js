import UserInfoForm from "../../components/auth/UserInfoForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withdraw } from "../../modules/auth";

const MyInfoForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, auth, authError } = useSelector(({ auth }) => ({
        data: auth.getInfo,
        auth: auth.auth,
        authError: auth.authError,
    }));
    
    // 로그아웃 버튼 클릭 시
    const onLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('username');
        navigate('/');
        window.location.reload();
    };

    // 회원탈퇴 클릭 시
    const onWithDraw = () => {
        handleDialogOpen();
    };

    // 회원탈퇴 전 확인용 모달
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleDialogOpen = () => setIsDialogOpen(true);
    const handleDialogClose = () => setIsDialogOpen(false);
    const onAfterClick = () => {
        dispatch(withdraw());
        handleDialogClose();
    };

    useEffect(() => {
        if (authError) {
            console.log("회원탈퇴 실패", authError);
        }
        if (auth) {
            console.log("회원탈퇴 성공", auth);
            handleModalOpen();
        }
    }, [auth, authError]);

    // 회원탈퇴 완료 안내메세지용 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => {
        setIsModalOpen(false);
        onLogout();
    };
    
    return(
        <UserInfoForm 
            type="myInfo"
            form={data}
            isDialogOpen={isDialogOpen}
            onDialogClick={[handleDialogClose, onAfterClick]}
            isModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
            onLogout={onLogout}
            onWithDraw={onWithDraw}
        />
    );
};

export default MyInfoForm;