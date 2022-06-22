import React from 'react';
import { User } from '../../../model/user';
import { ButtonFullScreen } from "../butonFullScreen";
import { Dropdown } from "../dropdown";
import { AvatarUser } from "../avatarUser";
interface HeaderProps {
    user?: User;
}

const dataMenu = [
    {id: 1, name: 'Account'},
    {id: 2, name: 'Features'},
    {id: 3, name: 'History'},
    {id: 4, name: 'Support'},
    {id: 5, name: 'Sign out'},
]

const userLogin = {
    name: 'Sarah Kortney',
    url : 'https://gogo-react.coloredstrategies.com/assets/img/profiles/l-1.jpg',
    alt : 'Sarah Kortney'
}

export const Header = ({ user }: HeaderProps) => (
    <nav className="navbar fixed-top">
        <div className="d-flex align-items-center navbar-left">Header left</div>
        <div className="navbar-logo">
            <span className="logo">Logo</span>
        </div>
        <div className="navbar-right flex justify-center items-center">
            <ButtonFullScreen iconBtn="FullScreen" />
            <Dropdown contentData={dataMenu} >
                <AvatarUser name={userLogin.name} srcImg={userLogin.url} altImg={userLogin.alt} />
            </Dropdown>
        </div>
    </nav>
);
