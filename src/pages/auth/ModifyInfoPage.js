import UserInfoTemplete from "../../components/auth/UserInfoTemplete";
import ModifyInfoForm from "../../containers/auth/ModifyInfoForm";

const ModifyInfoPage = () => {
    return (
        <UserInfoTemplete type="modifyInfo">
            <ModifyInfoForm />
        </UserInfoTemplete>
    );
};

export default ModifyInfoPage;