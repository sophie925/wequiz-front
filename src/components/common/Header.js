import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = ({ user, onLogout, isOpen, toggle }) => {
    return (
        <>
            <Navbar user={user} toggle={toggle} />
            <Sidebar isOpen={isOpen} user={user} onLogout={onLogout} toggle={toggle} />
        </>
    );
};

export default Header;