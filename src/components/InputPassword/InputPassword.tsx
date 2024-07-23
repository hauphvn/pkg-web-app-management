import {Input as InputAnt, InputProps as AntInputProps} from 'antd';
import {ReactNode} from "react";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

interface InputProps extends Omit<AntInputProps, 'children'> {
    className?: string;
    iconOpenEye?: ReactNode;
    iconCloseEye?: ReactNode;
    warning?: boolean
}

const InputPassword = (props: InputProps) => {
    return (
        <InputAnt.Password
            iconRender={(visible: boolean) => (visible ? (props?.iconOpenEye ? (<div className={' w-[24px] hover:cursor-pointer '}>
                        {props.iconOpenEye}
                    </div>) :
                    <EyeTwoTone/>
            ) : (props?.iconCloseEye ? <div className={'w-[24px] hover:cursor-pointer'}>
                        {props.iconCloseEye}
                    </div> :
                    <EyeInvisibleOutlined/>
            ))}
            {...props}
            className={`
        ${props?.className} w-full h-full rounded-[8px] px-[20px] py-[14px] ${props?.warning ? 'border-semantics-red02' : 'border-none'}  `}
        />
    );
};

export default InputPassword;