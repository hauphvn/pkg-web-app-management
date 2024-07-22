import {Button as ButtonAnt, ButtonProps as AntButtonProps} from 'antd';

interface ButtonProps extends Omit<AntButtonProps, 'children'> {
    className?: string;
    name: string;
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonAnt
            className={`${props?.type === 'primary' ? 'disabled:bg-[#E3FFF0] disabled:border-[#E3FFF0] disabled:text-[#0E5932] disabled:font-[600] ' +
                ' bg-gradient-to-r from-[#198B4D] to-[#05AA50] text-white border-[#198B4D] border' : ''} 
        rounded-[8px] px-[26px]  border-[#DDDDE3] border
        ${props.className}`}

            {...props}>
            {props.name}
        </ButtonAnt>
    );
};

export default Button;