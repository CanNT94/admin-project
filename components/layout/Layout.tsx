import React, { ReactNode } from 'react';
import Sidebar from '../ui/sidebar/Sidebar';
import Header from '../ui/header/Header';
import { useAppSelector } from '../../store/hooks';
import { selectMenu } from '../../store/menuSlice';
import { MenuStateEnum } from '../../enum/enum';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const menuState = useAppSelector(selectMenu);
    return (
        <div
            className={`menu-default ${
                menuState === MenuStateEnum.HIDE_ALL ? 'main-hidden' : ''
            } ${
                menuState === MenuStateEnum.MAIN_MENU ||
                menuState === MenuStateEnum.HIDE_ALL
                    ? 'sub-hidden'
                    : ''
            }`}
        >
            <Header />
            <Sidebar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
