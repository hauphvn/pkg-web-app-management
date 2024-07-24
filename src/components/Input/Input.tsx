import {Input as InputAnt, InputProps as AntInputProps} from 'antd';
import {ReactNode} from "react";

interface InputProps extends Omit<AntInputProps, 'children'> {
    className?: string;
    warning?: boolean
    suffix?: ReactNode
}

const Input = (props: InputProps) => {
    return (
        <InputAnt
            {...props}
            className={`
         box-border max-h-[50px] rounded-[8px] px-[20px] py-[14px] ${props?.warning ? 'border-semantics-red02' : 'border-none '} 
           ${props?.className}`}
        />
    );
};

export default Input;