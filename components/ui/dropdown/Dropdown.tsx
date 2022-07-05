import React, { useState } from 'react';
import useClickOutside from '../../../hooks/useOutside';

interface IDropDownProps {
    children?: React.ReactNode;
    contentData: {
        id: number;
        name: React.ReactElement | string;
    }[];
}

const Dropdown = ({ children, contentData }: IDropDownProps) => {
    const ref = React.useRef(null);
    const [visible, setVisible] = useState<boolean>(false);
    useClickOutside(ref, () => setVisible(false));

    return (
        <div className="relative dropdown-menu-custom w-36" ref={ref}>
            <button onClick={() => setVisible(!visible)}>{children}</button>
            {visible && (
                <ul className="px-0 dropdown-popup py-2 w-40 z-50 rounded-xl absolute top-14 right-0">
                    {contentData.map(item => (
                        <li
                            className="item-dropdown px-4 py-2 text-left text-sm hover:bg-gray-200 hover:text-gray-900"
                            key={item.id}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
