import React from 'react';

export interface IMasonry {
    gap?: number;
    columnWidth?: number;
    columnMaxHeight?: number;
    columnMinHeight?: number;
    children?: React.ReactNode;
}

const Masonry = ({
    gap = 15, // px
    columnWidth = 250, // px
    columnMaxHeight = 20, // vh
    columnMinHeight = 200, // px
    children,
}: IMasonry) => {
    return (
        <div
            className="masonry"
            style={{
                gridGap: gap,
                gridAutoRows: `minmax(${columnMaxHeight}vh, ${columnMinHeight}px)`,
                gridTemplateColumns: `repeat(auto-fill, minmax(${columnWidth}px, 1fr)`,
            }}
        >
            {children}
        </div>
    );
};

export default Masonry;
