import UserInfoTemplete from "../../components/auth/UserInfoTemplete";
import ChangePasswordForm from "../../containers/auth/ChangePasswordForm";

const ChangePasswordPage = () => {
    return (
        <UserInfoTemplete type="changePassword">
            <ChangePasswordForm />
        </UserInfoTemplete>
    );
};

export default ChangePasswordPage;