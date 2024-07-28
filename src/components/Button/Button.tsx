import {Button as ButtonAnt, ButtonProps as AntButtonProps} from 'antd';

interface ButtonProps extends Omit<AntButtonProps, 'children'> {
    className?: string;
    name: string;
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonAnt
            {...props}
            className={`text-greenFrom font-[500] bg-neutrals-50
        rounded-[8px] px-[26px]  border-neutrals-300 border 
        ${props.className}`}
           >
            {props.name}
        </ButtonAnt>
    );
};

export default Button;