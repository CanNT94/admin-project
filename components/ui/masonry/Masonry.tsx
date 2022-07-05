import React from 'react';

export interface IMasonry {
    gap?: number;
    children?: React.ReactNode;
}

const Masonry = ({ children, gap = 15 }: IMasonry) => {
    return (
        <div className="masonry" style={{ gridGap: gap }}>
            {children}
        </div>
    );
};

export default Masonry;
