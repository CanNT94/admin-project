import React, { useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import useWindowScoll from '../../../hooks/useWindowScoll';

export interface IMasonry {
    columns?: number;
    gap?: number;
    children?: React.ReactNode;
}

const Masonry = ({ children, columns, gap }: IMasonry) => {
    const size = useWindowSize();
    const hg = useWindowScoll();

    const getColOnResize = (size: number) => {
        let cols = columns;
        if (size < 1440 && size > 1200) {
            cols = 5;
        } else if (size < 1200 && size > 1024) {
            cols = 4;
        } else if (size < 1024 && size > 640) {
            cols = 3;
        } else if (size < 640) {
            cols = 2;
        }
        return cols;
    };

    const cols = getColOnResize(size.width);

    return (
        <div className="masonry" style={{ columnCount: cols, columnGap: gap }}>
            {children}
        </div>
    );
};

export default Masonry;
