import AuthOtherTemplate from "../../components/auth/AuthOtherTemplate";
import CrerateAccountForm from "../../containers/auth/CreateAccountForm";

const CreateAccountPage = () => {
    return (
        <AuthOtherTemplate type="create">
            <CrerateAccountForm />
        </AuthOtherTemplate>
    );
};

export default CreateAccountPage;