import React, { ReactNode } from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import Header from '../ui/header/Header';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div className="menu-default">
            <Header />
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
