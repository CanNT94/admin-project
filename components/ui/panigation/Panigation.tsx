import React, { useState } from 'react';

interface IPanigationProps {
    total?: number;
    per_page?: number;
    current_page?: number;
    onChange?: (value: number) => void;
    // value => return Id number
}
const Panigation = ({ total, per_page, current_page, onChange }: IPanigationProps) => {
    const [isActive, setIsActive] = useState(current_page ?? 0);

    const getTotalPage = (total: number, per_page: number) => {
        let totalPage: number = 0;
        return (totalPage = Math.ceil(total / per_page));
    };

    const next = () => {
        setIsActive((item) => item += 1);
    }

    const prev = () => {
        setIsActive((item) => item -= 1);
    }

    const total_page = getTotalPage(total ?? 0, per_page ?? 0);

    const renderItem = () => {
        let items: any = [];
        for (let i = 1; i <= total_page; i++) {
            items.push(
                <li
                    className={`page-item page-item-${i} ${isActive === i ? 'active' : ''
                        }`}
                    key={i}
                    onClick={() => onChange?.(i)}
                >
                    <button
                        className="link-page"
                        onClick={() => setIsActive(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return items;
    };

    const elementRender = renderItem();

    return (
        <ul className="flex items-center justify-center pagination">
            <li className={`page-item ${isActive === 1 ? 'disabled' : ''}`}>
                <button className="link-page prev" onClick={() => prev()}>
                    <i className="bi bi-chevron-left"></i>
                </button>
            </li>
            {elementRender}
            <li
                className={`page-item ${isActive === total_page ? 'disabled' : ''
                    }`}
            >
                <button className="link-page next" onClick={() => next()}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            </li>
        </ul>
    );
};

export default Panigation;
