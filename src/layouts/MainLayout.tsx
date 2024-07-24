import React from "react";
import LeftMenu from "../components/LeftMenu";
import Logout from "../components/Logout";

interface Props {
    children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
    return (
        <div className={'min-h-screen flex flex-auto pl-8 bg-[#FCFCFD]'}>
            <aside
                className={'max-w-[304px] border-r-[#DDDDE3] border-r-[1px] justify-between flex flex-auto flex-col pr-[24px] pt-[40px]'}>
                <div className={'flex-2'}>
                    <LeftMenu/>
                </div>
                <div className={'flex-0'}>
                    <Logout/>
                </div>
            </aside>
            <main className={'flex-1'}>{children}</main>
        </div>
    );
};

export default MainLayout;