import React, { useState } from 'react';

interface IPanigationProps {
    total?: number;
    per_page?: number;
    current_page?: number;
    maxPageToDispaly?: number;
    onChange?: (value: number) => void;
    // value => return Id number
}
const Panigation = ({
    total,
    per_page,
    current_page,
    maxPageToDispaly,
    onChange,
}: IPanigationProps) => {
    const [currentPage, setCurrentPage] = useState(current_page ?? 0);

    const getTotalPage = (total: number, per_page: number) => {
        let totalPage: number = 0;
        return (totalPage = Math.ceil(total / per_page));
    };

    const next = () => {
        setCurrentPage(item => (item += 1));
    };

    const prev = () => {
        setCurrentPage(item => (item -= 1));
    };

    const total_page = getTotalPage(total ?? 0, per_page ?? 0);

    const getPager = (
        totalPages: number,
        currentPage: number,
        pageSize: number,
        maxPagesToDisplay: number
    ) => {
        const currPage = currentPage;
        const pgSize = pageSize;
        const maxPgToDisplay = maxPagesToDisplay;
        const totalPg = Math.ceil(totalPages / pageSize);

        let startPg = 0;
        let endPg = 0;

        if (totalPg <= maxPgToDisplay) {
            startPg = 1;
            endPg = totalPg;
        } else {
            const midPoint = Math.ceil(maxPagesToDisplay / 2);
            const nextPoint = midPoint - 1;

            if (currPage <= midPoint) {
                startPg = 1;
                endPg = maxPagesToDisplay;
            } else if (currPage + nextPoint >= totalPg) {
                startPg = totalPg - (maxPagesToDisplay - 1);
                endPg = totalPg;
            } else {
                startPg = currentPage - nextPoint;
                endPg = currentPage + nextPoint;
            }
        }

        return {
            totalPages: totalPg,
            currentPage: currPage,
            pageSize: pgSize,
            startPage: startPg,
            endPage: endPg,
        };
    };

    const pager = getPager(
        total ?? 0,
        currentPage,
        per_page ?? 0,
        maxPageToDispaly ?? 0
    );

    const renderItem = () => {
        let items: any = [];
        for (let i = pager.startPage; i <= pager.endPage; i++) {
            items.push(
                <li
                    className={`page-item page-item-${i} ${
                        currentPage === i ? 'active' : ''
                    }`}
                    key={i}
                    onClick={() => onChange?.(i)}
                >
                    <button
                        className="link-page"
                        onClick={() => setCurrentPage(i)}
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
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="link-page prev" onClick={() => prev()}>
                    <i className="bi bi-chevron-left"></i>
                </button>
            </li>
            {elementRender}
            <li
                className={`page-item ${
                    currentPage === total_page ? 'disabled' : ''
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
