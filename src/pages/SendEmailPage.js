import AuthOtherTemplate from "../components/auth/AuthOtherTemplate";
import SendEmailForm from "../containers/auth/SendEmailForm";

const SendEmailPage = () => {
    return (
        <AuthOtherTemplate type="send">
            <SendEmailForm />
        </AuthOtherTemplate>
    );
};

export default SendEmailPage;