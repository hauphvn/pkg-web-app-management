import React from "react";
import LeftMenu from "../components/LeftMenu";
import Logout from "../components/Logout";

interface Props {
    children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
    return (
        <div className={'min-h-screen grid grid-cols-4 px-8 bg-[#FCFCFD]'}>
            <aside
                className={'col-span-1 border-r-[#DDDDE3] border-r-[1px] justify-between flex flex-auto flex-col pr-[24px] pt-[40px]'}>
                <div className={'flex-2'}>
                    <LeftMenu/>
                </div>
                <div className={'flex-0'}>
                    <Logout/>
                </div>
            </aside>
            <main className={'col-span-3'}>{children}</main>
        </div>
    );
};

export default MainLayout;