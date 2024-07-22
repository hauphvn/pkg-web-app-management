import Button from "../../components/Button";
import {Plus} from "../../assets/svgs/SVGIcon.tsx";

const Dashboard = () => {
    // const itemsDropdown: ({ label: string; key: string } | { label: string; key: string })[] =[
    //     {
    //         label: "Cua hang 1",
    //         key: '1'
    //     },
    //     {
    //         label: "Cua hang 2",
    //         key: '2'
    //     }
    // ]
    return (
        <div className={'flex gap-4'}>
            <Button name={'Thêm mới'}/>
            <Button disabled name={'Thêm mới'}/>
            <Button icon={<Plus/>} type={'primary'} name={'default'}/>
            <Button disabled type={'primary'} name={'primary disable'}/>
            <hr/>
            {/*<Dropdown items={itemsDropdown} name={'Cửa hàng'}/>*/}

        </div>
    );
};

export default Dashboard;