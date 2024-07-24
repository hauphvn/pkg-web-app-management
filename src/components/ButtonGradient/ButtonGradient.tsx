import {ReactNode} from "react";

interface ButtonGradientProps {
    className?: string,
    name: string,
    onClick?: () => void,
    disabled?: boolean,
    icon?:ReactNode
}
const ButtonGradient = (props: ButtonGradientProps) => {
    return (
            <button
                {...props}
                className={` bg-gradient-green text-neutrals-50 rounded-[8px] border-[#DDDDE3] border font-[500] disabled:bg-gradient-green-disabled disabled:border-[#E3FFF0] inline-flex items-center justify-center  ${props?.className}`}
            >
                <div>{props?.icon ? props.icon : null}</div>
               <div> {props?.name || 'Button'}</div>
            </button>
    );
};

export default ButtonGradient;