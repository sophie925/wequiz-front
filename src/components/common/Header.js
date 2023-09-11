import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = ({ user, onLogout, isOpen, toggle, onClick }) => {
    return (
        <>
            <Navbar user={user} toggle={toggle} onClick={onClick} />
            <Sidebar user={user} onLogout={onLogout} isOpen={isOpen} toggle={toggle} onClick={onClick} />
        </>
    );
};

export default Header;