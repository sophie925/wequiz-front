import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import Footer from "../../components/common/Footer";

const FooterContainer = () => {
    const navigate = useNavigate();
    
    const onClickMenu = (link) => {
        if (!link) {
            alert("아직 준비중 서비스입니다😂");
        } else {
            navigate(link);
        }
    };
    
    return <Footer onClick={onClickMenu} />;
};

export default FooterContainer;