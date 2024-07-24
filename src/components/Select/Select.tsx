import { Select as SelectAnt } from 'antd';
import {ReactNode} from "react";
// import type { SelectProps as SelectAntProps } from 'antd';

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
                suffixIcon={props?.suffixIcon}
                mode="multiple"
                maxTagCount={props?.maxTagCount}
                allowClear
                style={{ width: '100%' }}
                className={`overflow-hidden border-neutrals-50 border rounded-[8px] ${props?.className}`}
            />
        // </Space>
    );
};

export default Select;