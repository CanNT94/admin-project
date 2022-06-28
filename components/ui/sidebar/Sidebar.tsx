import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectMenu } from '../../../store/menuSlice';
import { MenuStateEnum } from '../../../enum/enum';
import { Menu, SubMenu } from '../../../model/menu';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();
    const [menuData, setMenuData] = useState<Menu[]>([]);
    const [menuSelected, setMenuSelected] = useState<Menu>();
    const [subMenuSelected, setSubMenuSelected] = useState<SubMenu>();
    const { t } = useTranslation();
    useEffect(() => {
        fetch('http://localhost:8888/menu', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                if (data?.length > 0) {
                    setMenuData(data);
                    setMenuSelected(data[0]);
                    setSubMenuSelected(data[0].subMenu[0]);
                }
            });
    }, []);
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
                    <div className="scrollbar-container ps">
                        <ul className="pl-0">
                            {menuData.map(menu => (
                                <li
                                    key={menu.id}
                                    className={`nav-item cursor-pointer ${
                                        menu.id === menuSelected?.id
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => setMenuSelected(menu)}
                                >
                                    <a>
                                        <i
                                            className={`text-3xl ${menu.iconClassName}`}
                                        ></i>
                                        {t(`${menu.label}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sub-menu">
                <div className="scroll">
                    <div className="scrollbar-container ps">
                        <ul className="d-block nav-sub-menu">
                            {menuSelected?.subMenu?.map((subMenu, index) => (
                                <li
                                    key={index}
                                    className={`nav-item cursor-pointer ${
                                        subMenuSelected?.id === subMenu.id &&
                                        subMenuSelected.label === subMenu.label
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => setSubMenuSelected(subMenu)}
                                >
                                    <a
                                        onClick={() =>
                                            router.push(subMenu.url as string)
                                        }
                                    >
                                        <i
                                            className={`mr-2 text-base ${subMenu.iconClassName}`}
                                        ></i>
                                        {t(`${subMenu.label}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
