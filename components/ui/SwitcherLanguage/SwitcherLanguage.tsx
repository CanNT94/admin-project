import React, { MouseEventHandler } from 'react';
import { useState, useRef, useEffect } from 'react';

interface DropDownProps {
    dataLanguage: {
        id: string;
        name: string;
    }[];
    languageActive: {
        id: string;
        title: string;
    };
}

const SwitcherLanguage = ({ dataLanguage, languageActive}: DropDownProps) => {
    const [visible, setVisible] = React.useState(false);
    const ref = useRef(null);

    const showMenuDropdown = (event: React.MouseEvent<HTMLElement>) => {
        setVisible(!visible);
    };

    const useOutsideClickShowMenu = (ref: any) => {
        useEffect(() => {
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

    const [title, setTitle] = useState(languageActive.id);
    const changeLanguage = (title: string) => {
        setTitle(title);
    };

    return (
        <div className="relative switcher-language ml-2">
            <button
                ref={ref}
                className="language-button dropdown-toggle btn btn-light btn-sm w-100 text-uppercase "
                onClick={(e): void => showMenuDropdown(e)}
            >
                <span className='label'>{title}</span>
            </button>
            {visible === true && (
                <div className="px-0 py-2 w-40 z-50 bg-white border border-slate-400 rounded-xl absolute top-14 right-0 switcher-options" >
                    {dataLanguage.map(item => (
                        <button
                            className="px-4 py-2 text-left text-sm hover:bg-gray-200"
                            key={item.id}
                            onClick={() => setTitle(item.id)}
                        >
                            {item.name}

                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SwitcherLanguage;