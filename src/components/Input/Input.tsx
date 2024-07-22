import {Input as InputAnt, InputProps as AntInputProps} from 'antd';

interface InputProps extends Omit<AntInputProps, 'children'> {
    className?: string;
}

const Input = (props: InputProps) => {
    return (
        <InputAnt
            {...props}
            className={`
        ${props?.className} box-border w-full max-h-[50px] rounded-[8px] px-[20px] py-[14px] border-none `}
        />
    );
};

export default Input;