import AuthOtherTemplate from "../../components/auth/AuthOtherTemplate";
import ResetPasswordForm from "../../containers/auth/ResetPasswordForm";

const ResetPasswordPage = () => {
    return (
        <AuthOtherTemplate type="reset">
            <ResetPasswordForm />
        </AuthOtherTemplate>
    );
};

export default ResetPasswordPage;