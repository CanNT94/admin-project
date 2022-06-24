import React, { MouseEventHandler } from 'react';
import useOutside from '../../../hooks/useOutside';

interface IDropDownProps {
    children?: React.ReactNode;
    contentData: {
        id: number;
        name: React.ReactElement | string;
    }[];
}

const Dropdown = ({ children, contentData }: IDropDownProps) => {
    const ref = React.useRef(null);
    const visible = useOutside(ref);
    
    return (
        <div className="relative dropdown-menu-custom w-36">
            <button ref={ref}>{children}</button>
            {visible === true && (
                <ul className="px-0 py-2 w-40 z-50 bg-white border border-slate-400 rounded-xl absolute top-14 right-0">
                    {contentData.map(item => (
                        <li
                            className="item-dropdown px-4 py-2 text-left text-sm hover:bg-gray-200"
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
