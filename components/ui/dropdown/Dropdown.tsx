import React, { MouseEventHandler } from 'react';

interface IDropDownProps {
    children?: React.ReactNode;
    contentData: {
        id: number;
        name: React.ReactElement | string;
    }[];
}

const Dropdown = ({ children, contentData }: IDropDownProps) => {
    const [visible, setVisible] = React.useState(false);
    const ref = React.useRef(null);

    const showMenuDropdown = (event: React.MouseEvent<HTMLElement>) => {
        setVisible(!visible);
    };

    const useOutsideClickShowMenu = (ref: any) => {
        React.useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false);
                }
            }
            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    };

    useOutsideClickShowMenu(ref);

    return (
        <div className="relative dropdown-menu-custom w-36" ref={ref}>
            <button
                
                onClick={(e): void => showMenuDropdown(e)}
            >
                {children}
            </button>
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
