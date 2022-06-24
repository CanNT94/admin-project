import { useEffect, useRef } from 'react';

let useClickOutside = ( ref:any ,handler: () => void) => { 
    useEffect(() => {
        let maybeHandler = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, []);
};


export default useClickOutside;
