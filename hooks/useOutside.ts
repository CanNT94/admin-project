import { useEffect, useState } from 'react';

const useOutside = (ref: any) => {
    const [visible, setVisible] = useState<boolean>(false);
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return visible;
};

export default useOutside;
