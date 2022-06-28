import React from "react";

export interface IMasonry {
    columns?: number;
    gap?: number;
    children?: React.ReactNode;
}

const Masonry = ({ children, columns, gap }: IMasonry) => {
    return (
        <div className="masonry" style={{columnCount: columns, columnGap: gap}}>
            {children}
        </div>
    )
}

export default Masonry;