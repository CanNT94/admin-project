import React, { useContext } from 'react';
import { User } from '../../../model/user';
import { ButtonFullScreen } from '../butonFullScreen';
import { Dropdown } from '../dropdown';
import AuthContext from '../../../context/auth-context';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as Icon from 'react-bootstrap-icons';

interface HeaderProps {
    user?: User;
}
const AvatarUser = dynamic(() => import('../avatarUser/AvatarUser'), {
    ssr: false,
})

export const Header = ({ user }: HeaderProps) => {
    const authCtx = useContext(AuthContext);
    
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
                Header left
            </div>
            <div className="navbar-logo">
                <span className="logo">Logo</span>
            </div>
            <div className="navbar-right flex justify-end items-center">
                <div className="user mr-14 flex justify-end items-center">
                    <ButtonFullScreen iconBtn={<Icon.ArrowsFullscreen />} />
                    <Dropdown contentData={dataMenu}>
                        <AvatarUser name={authCtx.user?.email} />
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};
