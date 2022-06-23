import React from 'react';
import { User } from '../../../model/user';
import Input from '../input/input';
import MenuButton from '../button/MenuButton';
import Image from 'next/image';
import logo from '../../../public/assets/images/smartosc_logo.png';
import { useRouter } from 'next/router';

interface HeaderProps {
    user?: User;
}

const Header = ({ user }: HeaderProps) => {
    const router = useRouter();
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
            </div>
            <div
                className="navbar-logo"
                role="button"
                onClick={() => router.push('/')}
            >
                <Image className="logo" src={logo} layout="fill"></Image>
            </div>
            <div className="navbar-right">Header right</div>
        </nav>
    );
};

export default Header;
