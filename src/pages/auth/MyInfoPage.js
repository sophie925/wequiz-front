import UserInfoTemplete from "../../components/auth/UserInfoTemplete";
import MyInfoForm from "../../containers/auth/MyInfoForm";

const MyInfoPage = () => {
    return (
        <UserInfoTemplete type="myInfo">
            <MyInfoForm />
        </UserInfoTemplete>
    );
};

export default MyInfoPage;