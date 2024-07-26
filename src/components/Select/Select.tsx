import { Select as SelectAnt } from 'antd';
import {ReactNode} from "react";
import {IconSelectArrowButton} from "../../assets/svgs/SVGIcon.tsx";

export interface SelectOption {
    label: string,
    value: string
}
interface SelectProps{
    className?: string,
    placeholder?: string,
    options: SelectOption[],
    id?:string
    suffixIcon?: ReactNode,
    maxTagCount?: number
}
// const options: SelectAntProps['options'] = [];
const Select = (props: SelectProps) => {
    return (
        // <Space className={'w-full flex items-center'} direction="vertical">
            <SelectAnt
                {...props}
                suffixIcon={props?.suffixIcon ? props.suffixIcon : <IconSelectArrowButton/>}
                mode="multiple"
                maxTagCount={props?.maxTagCount}
                allowClear
                style={{ width: '100%' }}
                className={` rounded-[8px] ${props?.className}`}
            />
        // </Space>
    );
};

export default Select;