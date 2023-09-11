import Header from "../../components/common/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { solveReset } from "../../modules/solve";

const HeaderContainer = () => {
    const dispatch = useDispatch();
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

    const onClickMenu = (link) => {
        if (!user && link === '/make') {
            navigate('/login');
        } else {
            dispatch(solveReset());
            navigate(link);
        }
    };
    
    return <Header user={user} onLogout={onLogout} isOpen={isOpen} toggle={toggle} onClick={onClickMenu} />;
};

export default HeaderContainer;