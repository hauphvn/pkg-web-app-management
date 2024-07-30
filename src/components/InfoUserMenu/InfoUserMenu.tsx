import {AvatarDefault} from "../../assets/svgs/SVGIcon.tsx";
import {useTheme} from "../../context/ThemeContext.tsx";

const InfoUserMenu = () => {
    const {isDarkMode} = useTheme();
    return (
        <div>
            <div className="avatar flex gap-x-[12px] items-center">
                <div>
                    <AvatarDefault/>
                </div>
                <div className="info-container">
                    <div className={`fullname capitalize text-[20px] font-[600] ${isDarkMode ? 'text-neutrals-50' : 'text-semantics-grey01'} `}>Nguyen van a</div>
                    <div className={`text-[16px] font-[500] ${isDarkMode ? 'text-neutrals-50' : 'text-neutrals-700'}`}>Quản trị viên</div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserMenu;