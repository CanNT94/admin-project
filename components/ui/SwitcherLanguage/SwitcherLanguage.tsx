import React, { useRef, useState } from 'react';
import useOutside from '../../../hooks/useOutside';

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

const SwitcherLanguage = ({ dataLanguage, languageActive }: DropDownProps) => {
    const [title, setTitle] = useState<string>(languageActive.id);
    const ref = useRef(null);
    const visible = useOutside(ref);

    return (
        <div className="relative switcher-language ml-2" ref={ref}>
            <button className="language-button dropdown-toggle btn btn-light btn-sm w-100 text-uppercase ">
                <span className="label">{title}</span>
            </button>
            {visible === true && (
                <div className="px-0 py-2 w-40 z-50 bg-white border border-slate-400 rounded-xl absolute top-14 right-0 switcher-options">
                    {dataLanguage.map(item => (
                        <div
                            className="px-4 py-2 text-left text-sm hover:bg-gray-200"
                            key={item.id}
                            onClick={() => setTitle(item.id)}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SwitcherLanguage;
