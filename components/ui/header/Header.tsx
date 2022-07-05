import React, { useContext, useEffect, useState } from 'react';
import { User } from '../../../model/user';
import { ButtonFullScreen } from '../butonFullScreen';
import { Dropdown } from '../dropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Input from '../input/input';
import MenuButton from '../button/MenuButton';
import logo from '../../../public/assets/images/smartosc_logo.png';
import AuthContext from '../../../context/auth-context';

import { ToggleSwitchTheme } from '../ToggleSwitchTheme';
import { SwitcherLanguage } from '../SwitcherLanguage';
import { Notification } from '../../../model/notification';
import ItemNotification from '../item-notification/ItemNotification';

interface HeaderProps {
    user?: User;
}
const AvatarUser = dynamic(() => import('../avatarUser/AvatarUser'), {
    ssr: false,
});

const dataLanguage = [
    { id: 'en', name: 'English' },
    { id: 'vi', name: 'Việt Nam' },
];

const languageActive = { id: 'en', title: 'English' };

export const Header = ({ user }: HeaderProps) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const authCtx = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        fetch('http://localhost:8888/notification', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setNotifications(data);
            });
    }, []);
    const dataMenu = [
        {
            id: 1,
            name: (
                <Link href={'/account'} passHref>
                    Account
                </Link>
            ),
        },
        {
            id: 2,
            name: (
                <Link href={'/features'} passHref>
                    Features
                </Link>
            ),
        },
        {
            id: 3,
            name: (
                <Link href={'/history'} passHref>
                    History
                </Link>
            ),
        },
        {
            id: 4,
            name: (
                <Link href={'/support'} passHref>
                    Support
                </Link>
            ),
        },
        {
            id: 5,
            name: !authCtx.user ? (
                <Link href={'/login'} passHref>
                    Sign In
                </Link>
            ) : (
                <button onClick={authCtx.logout}>Sign Out</button>
            ),
        },
    ];

    return (
        <nav className="navbar fixed-top">
            <div className="d-flex align-items-center navbar-left">
                <MenuButton />
                <Input
                    className="w-64"
                    placeholder="Search"
                    icon="bi bi-search"
                    type="text"
                ></Input>
                <SwitcherLanguage
                    dataLanguage={dataLanguage}
                    languageActive={languageActive}
                />
            </div>
            <div
                className="navbar-logo"
                role="button"
                onClick={() => router.push('/')}
            >
                <Image className="logo" src={logo} layout="fill"></Image>
            </div>
            <div className="navbar-right flex justify-end items-center">
                <div className="user mr-14 flex justify-end items-center">
                    <ToggleSwitchTheme />
                    <ItemNotification
                        notifications={notifications}
                    ></ItemNotification>
                    <ButtonFullScreen icon="bi bi-arrows-fullscreen" />
                    <Dropdown contentData={dataMenu}>
                        <AvatarUser name={authCtx.user?.email} />
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default Header;
