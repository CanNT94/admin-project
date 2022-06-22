import React, { ReactNode } from 'react';
import { Header } from '../ui/header/Header';
import Sidebar from '../ui/sidebar/Sidebar';

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
