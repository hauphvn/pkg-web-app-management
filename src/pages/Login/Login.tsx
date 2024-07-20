import useAuth from "../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ROUTES_PATH} from "../../constants";

const Login = () => {
    const navigate = useNavigate();
    const {login, isAuthenticated} = useAuth();
    useEffect(() => {
        console.log('isAuthenticated 1', isAuthenticated);
        if (isAuthenticated) {
            navigate(ROUTES_PATH.DASHBOARD);
        }
    }, [isAuthenticated, navigate]);
    const handleLogin = async () => {
       const result =  await login('hauphvnTokenTest');
       if(result){
           navigate(ROUTES_PATH.DASHBOARD);
       }
    }
    console.log('isAuthenticated 2', isAuthenticated);
    return (
        <div className={'flex justify-center items-center p-3 min-h-screen flex-col gap-5'}>
            <h1>Login page</h1>
            <button className={'border border-green-500 bg-green-50 p-3 rounded'} onClick={handleLogin}> Đăng nhập
            </button>
        </div>
    );
};

export default Login;