import React, { useState } from 'react';
import { MenuStateEnum } from '../../../enum/enum';
import { useAppDispatch } from '../../../store/hooks';
import { setMenuState } from '../../../store/menuSlice';

const MenuButton = () => {
    const dispatch = useAppDispatch();
    const [menu, setMenu] = useState<MenuStateEnum>(MenuStateEnum.MENU);
    const handleMenu = () => {
        let state: MenuStateEnum;
        switch (menu) {
            case MenuStateEnum.MENU:
                state = MenuStateEnum.MAIN_MENU;
                break;
            case MenuStateEnum.MAIN_MENU:
                state = MenuStateEnum.HIDE_ALL;
                break;
            default:
                state = MenuStateEnum.MENU;
        }
        setMenu(state);
        dispatch(setMenuState(state));
    };
    return (
        <button
            className="menu-button flex justify-center"
            onClick={handleMenu}
        >
            <i className="bi bi-list"></i>
        </button>
    );
};

export default MenuButton;
