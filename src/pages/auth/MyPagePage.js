import UserInfoTemplete from "../../components/auth/UserInfoTemplete";
import MyPageForm from "../../containers/auth/MyPageForm";

const MyPagePage = () => {
    return (
        <UserInfoTemplete type="mypage">
            <MyPageForm />
        </UserInfoTemplete>
    );
};

export default MyPagePage;