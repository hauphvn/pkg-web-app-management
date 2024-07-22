import {useNavigate} from "react-router-dom";
import {ROUTES_PATH} from "../../constants";
import useAuth from "../../hooks/useAuth.ts";

const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    const handleLogout = async () => {
        logout();
           navigate(ROUTES_PATH.LOGIN);
    }
    return (
        <div>
            <button className={'border border-green-500 bg-green-50 p-3 rounded'} onClick={handleLogout}> Đăng xuất
            </button>
        </div>
    );
};

export default Logout;