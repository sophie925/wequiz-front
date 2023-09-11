import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfoForm from "../../components/auth/UserInfoForm";
import Loading01 from "../../components/common/Loading01";
import { authReset, getProfile, updateData } from "../../modules/auth";
import { quizReset } from "../../modules/quiz";
import { getMemberStats } from "../../modules/stats";

const MyPageForm = () => {
    const dispatch = useDispatch();
    const { auth, authError } = useSelector(({ auth }) => ({
        auth: auth.auth,
        authError: auth.authError,
    }));
    const { form } = useSelector(({ stats }) => ({
        form: stats.status
    }));
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(quizReset());
        setLoading(true);
        // 회원정보 조회 api - 현재는 이름만 호출
        dispatch(getProfile());
    }, [dispatch]);

    // 회원정보 조회 api 호출 후 로직
    useEffect(() => {
        if (authError) {
            console.log("회원정보 조회 오류 발생", authError);
        }
        if (auth && auth.status === 200) {
            // console.log("회원정보 조회 성공", auth);
            const data = auth.data.data;
            setUserName(data.name);
            dispatch(updateData({ form: 'getInfo', data: data }));
            dispatch(authReset());
            dispatch(getMemberStats());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (form && form.status === 200) {
            // console.log("회원 퀴즈통계 조회 성공", form);
        }
        setTimeout(() => setLoading(false), 500);
    }, [form]);

    return(
        <>
            {loading ? <Loading01 /> : (
                <UserInfoForm
                    type="mypage"
                    userName={userName}
                    form={form}
                />
            )}
        </>
    );
};

export default MyPageForm;