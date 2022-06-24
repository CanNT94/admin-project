import React from 'react';

interface IButtonFullProps {
    icon?: string;
}

const ButtonFullScreen = ({ icon }: IButtonFullProps) => {
    const handleClick = () => {
        const isInFullScreen =
            document.fullscreenElement && document.fullscreenElement !== null;
        const docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <button className="px-2 py-2 outline-none mx-2" onClick={handleClick}>
            <i className={icon}></i>
        </button>
    );
};

export default ButtonFullScreen;
