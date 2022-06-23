import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectMenu } from '../../../store/menuSlice';
import { MenuStateEnum } from '../../../enum/enum';

const Sidebar = () => {
    const menuState = useAppSelector(selectMenu);
    return (
        <div
            className={`sidebar ${
                menuState === MenuStateEnum.HIDE_ALL ? 'main-hidden' : ''
            } ${
                menuState === MenuStateEnum.MAIN_MENU ||
                menuState === MenuStateEnum.HIDE_ALL
                    ? 'sub-hidden'
                    : ''
            }`}
        >
            <div className="main-menu">
                <div className="scroll">
                    <div className="scrollbar-container ps">Main Menu</div>
                </div>
            </div>

            <div className="sub-menu">
                <div className="scroll">
                    <div className="scrollbar-container ps">Sub menu</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
