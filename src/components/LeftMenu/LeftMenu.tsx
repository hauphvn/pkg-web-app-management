import InfoUserMenu from "../InfoUserMenu";
import MenuItem from "../MenuItem";
import {IconArticleMenu, IconCartMenu, IconManageMenu, IconStoreMenu} from "../../assets/svgs/SVGIcon.tsx";
import {NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants";
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from "react";
const LeftMenu = () => {
    const location = useLocation();
    const [pathName, setPathName] = useState('')
    useEffect(() => {
        setPathName(location?.pathname);
    }, [location]);
    return (
        <div>
            <InfoUserMenu/>
            <div className={'pt-[40px] flex gap-y-[24px] flex-col'}>
                <NavLink
                    to={ROUTES_PATH.DASHBOARD}>
                    <MenuItem isActive={pathName === ROUTES_PATH.DASHBOARD} icon={<IconManageMenu isActive={true}/>} name={'Quản trị'} hasChildren/>
                </NavLink>
                <NavLink to={ROUTES_PATH.PRODUCT}>
                    <MenuItem isActive={pathName.includes(ROUTES_PATH.PRODUCT)} icon={<IconCartMenu isActive={false}/>} name={'Sản phẩm'}/>
                </NavLink>
                <NavLink to={ROUTES_PATH.ARTICLE}>
                    <MenuItem isActive={pathName.includes(ROUTES_PATH.ARTICLE)} icon={<IconArticleMenu isActive={false}/>} name={'Bài viết'}/>
                </NavLink>
                <NavLink to={ROUTES_PATH.STORE}>
                    <MenuItem isActive={pathName.includes(ROUTES_PATH.STORE)} icon={<IconStoreMenu isActive={false}/>} name={'Cửa hàng'}/>
                </NavLink>
            </div>
        </div>
    );
};

export default LeftMenu;