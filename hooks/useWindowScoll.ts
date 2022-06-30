import React, { useState, useEffect } from 'react';

export const useWindowScoll = () => {
    const [height, setHeight] = useState({ height: 0 });
    useEffect(() => {
        const onScroll = () => {            
            setHeight({
                height: window.pageYOffset
            });
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return height;
};

export default useWindowScoll;
