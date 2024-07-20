import React from "react";

interface Props {
    children?: React.ReactNode
}

const MainLayout = ({children}: Props) => {
    return (
        <div className={'min-h-screen grid grid-cols-4'}>
            <aside className={'col-span-1'}>left</aside>
            <main className={'col-span-3'}>{children}</main>
        </div>
    );
};

export default MainLayout;