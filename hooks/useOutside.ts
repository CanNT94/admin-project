import { useEffect } from 'react';

let useOutside = (ref: any, handler: () => void) => {
    useEffect(() => {
        let handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

export default useOutside;
