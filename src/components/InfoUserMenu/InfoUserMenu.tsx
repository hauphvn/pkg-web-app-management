import {AvatarDefault} from "../../assets/svgs/SVGIcon.tsx";

const InfoUserMenu = () => {
    return (
        <div>
            <div className="avatar flex gap-x-[12px] items-center">
                <div>
                    <AvatarDefault/>
                </div>
                <div className="info-container">
                    <div className="fullname capitalize text-[20px] font-[600] text-[#454545]">Nguyen van a</div>
                    <div className={'text-[16px] font-[500] text-[#7E808A]'}>Quản trị viên</div>
                </div>
            </div>
        </div>
    );
};

export default InfoUserMenu;