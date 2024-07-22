import {ReactNode} from "react";
import {IconArrowButton} from "../../assets/svgs/SVGIcon.tsx";

interface MenuItemProps {
    hasChildren?: boolean,
    name: string,
    icon?: ReactNode,
    isActive?: boolean
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <div className={` transition-all duration-150 ${props?.isActive ? 'bg-primary-100' : ''} 
        rounded-[12px] pr-[16px] py-[12px] flex flex-auto gap-x-[13px] justify-center items-center hover:cursor-pointer`}>
            <div
                className={`w-[3px] ${props?.isActive ? 'lineActive h-[24px] bg-lineActive rounded-[100px]' : ''}`}></div>
            <div className={'flex-1 flex gap-x-[16px]'}>
                <div>
                    {props?.icon ? props.icon : null}
                </div>
                <div className={`${props.isActive} ? 'text-primary' : ''`}>{props.name}</div>
            </div>
            <div className={'flex-0'}>
                {props?.hasChildren ? (
                    <IconArrowButton isActive={props.isActive || false}/>
                ) : null}
            </div>
        </div>
    );
};

export default MenuItem;