import React from "react";
import Logout from "../pages/Logout";

interface Props {
    children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
    return (
        <div className={'min-h-screen grid grid-cols-4 p-8'}>
            <aside className={'col-span-1 justify-between flex flex-auto flex-col'}>
                <div className={'flex-2'}>menu item</div>
                <div className={'flex-0'}>
                    <Logout/>
                </div>
            </aside>
            <main className={'col-span-3'}>{children}</main>
        </div>
    );
};

export default MainLayout;