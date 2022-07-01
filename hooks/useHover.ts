import React, { useEffect, useState } from 'react';

const useHover = (ref: any) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    
    const handleMouseOver = () => {
        setIsHover(true);
    };
    const handleMouseOut = () => setIsHover(false);

    useEffect(() => {
        if (ref?.current) {
            window.addEventListener('mouseover', handleMouseOver);
            window.addEventListener('mouseout', handleMouseOut);
            return () => {
                window.removeEventListener('mouseover', handleMouseOver);
                window.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [ref.current]);

    return isHover;
};

export default useHover;
