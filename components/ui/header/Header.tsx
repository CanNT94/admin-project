import React from 'react';
import { User } from '../../../model/user';
import { ToggleSwitchTheme } from '../ToggleSwitchTheme';
import { SwitcherLanguage } from '../SwitcherLanguage';

interface HeaderProps {
    user?: User;
}

const dataLanguage = [
    { id: 'en', name: 'English' },
    { id: 'vn', name: 'VietNam' },
];

const languageActive = { id: 'en', title: 'English' };

export const Header = ({ user }: HeaderProps) => (
    <nav className="navbar fixed-top">
        <div className="d-flex align-items-center navbar-left">
            <SwitcherLanguage
                dataLanguage={dataLanguage}
                languageActive={languageActive}
            />
            <div className="position-relative buy-action d-none d-none d-lg-inline-block">
                <a
                    className="btn btn-outline-primary btn-sm ml-2"
                    target="_top"
                    href="#"
                >
                    BUY
                </a>
            </div>
        </div>
        <div className="navbar-logo">
            <span className="logo">Logo</span>
        </div>
        <div className="navbar-right">
            <ToggleSwitchTheme />
        </div>
    </nav>
);
