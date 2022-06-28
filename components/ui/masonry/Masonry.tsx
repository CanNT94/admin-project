import React from "react";

export interface IMasonry {
    columns?: number;
    gap?: number;
    children?: React.ReactNode;
}

const Masonry = ({ children, columns, gap }: IMasonry) => {
    console.log(typeof children);
    
    const columnWrapper:any = {};
    const result = [];
    // create columns
    
    const createColumns = (col: number) => {
        
    }

    const col = createColumns(columns ?? 0);  

    return (
        <div className="masonry">
            {children}
        </div>
    )
}

export default Masonry;