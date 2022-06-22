import React from 'react';
import { User } from '../../../model/user';
interface HeaderProps {
    user?: User;
}

export const Header = ({ user }: HeaderProps) => (
    <nav className="navbar fixed-top">
        <div className="d-flex align-items-center navbar-left">Header left</div>
        <div className="navbar-logo">
            <span className="logo">Logo</span>
        </div>
        <div className="navbar-right">Header right</div>
    </nav>
);
