import PolicyTemplate from "../components/policy/PolicyTemplate";
import PolicyForm from "../components/policy/PolicyForm";

const TermsPage = () => {
    return (
        <PolicyTemplate type="terms">
            <PolicyForm type="terms"/>
        </PolicyTemplate>
    );
};

export default TermsPage;