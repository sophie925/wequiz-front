import { useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const HeaderContainer = () => {
    const navigate = useNavigate();
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const onLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('username');
        navigate('/');
        window.location.reload();
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggle  = () => setIsOpen(!isOpen);
    
    return <Header user={user} onLogout={onLogout} isOpen={isOpen} toggle={toggle} />;
};

export default HeaderContainer;