import {Modal} from "antd";
import Button from "../Button";
import {ReactNode} from "react";
import ButtonGradient from "../ButtonGradient";

interface ErrorModalProps {
    onCancel?: () => void;
    onOk: () => void;
    okText?: string;
    cancelText?: string;
    open: boolean;
    children: ReactNode,
    title: ReactNode
}

const ErrorModal = (props: ErrorModalProps) => {
    return (
        <Modal

            destroyOnClose
            title={props.title}
            footer={
                <div className={'flex gap-x-[8px] w-full justify-end '}>
                    <Button
                        className={'h-[40px]'}
                        name={props.cancelText || 'Đóng'}
                        key="back" onClick={props?.onCancel}/>
                    <ButtonGradient
                        className={'h-[40px] w-[150px]'}
                        onClick={props?.onOk}
                        name={props.okText || 'Xác nhận'}
                        key="submit"/>
                </div>

            }
            open={props.open}
            onCancel={props?.onCancel}
        >
            {props.children}
        </Modal>
    );
};

export default ErrorModal;