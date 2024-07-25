import {useNavigate} from "react-router-dom";
import {ROUTES_PATH} from "../../constants";
import useAuth from "../../hooks/useAuth.ts";
import {IconDarkTheme, IconLightTheme, IconLogout} from "../../assets/svgs/SVGIcon.tsx";
import {useState} from "react";

const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    const [theme, setTheme] = useState('light');
    const handleLogout = async () => {
        logout();
        navigate(ROUTES_PATH.LOGIN);
    }
    const onHandleChangeTheme = (theme: string) => {
        setTheme(theme);
    }
    return (
        <div className={'flex flex-col gap-y-[24px] pb-10'}>
            <div onClick={handleLogout}
                 className="btnLogout px-[12px] py-[16px] hover: cursor-pointer flex gap-x-[16px] items-center">
                <IconLogout/>
                <div className={'text-neutrals-700 text-[18px] font-[500] hover:text-semantics-green01'}>Đăng xuất</div>
            </div>
            <div className="theme-container w-full bg-[#EBEBEF] rounded-[8px] grid grid-cols-2 justify-center items-center h-[37px]">
                <div onClick={() => onHandleChangeTheme('light') } className={`transition-all duration-200 h-[35px] ${theme === 'light' ? 'bg-[#FCFCFD]' : ''} hover:cursor-pointer ${theme === 'light' ? 'shadow-light-2' : ''} col-span-1  overflow-hidden rounded-[8px] flex justify-center items-center`}>
                    <IconLightTheme isActive={theme === 'light'}/>
                </div>
                <div onClick={() => onHandleChangeTheme('dark') } className={`transition-all duration-200 hover:cursor-pointer h-[35px] ${theme === 'dark' ? 'shadow-light-2' : ''} col-span-1 overflow-hidden rounded-[8px] flex justify-center items-center`}>
                    <IconDarkTheme isActive={theme === 'dark'}/>
                </div>
            </div>
        </div>
    );
};

export default Logout;