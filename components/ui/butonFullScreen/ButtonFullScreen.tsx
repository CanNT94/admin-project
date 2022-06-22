import React from 'react';

interface IButtonFullProps {
    iconBtn: string;
}

const ButtonFullScreen = ({ iconBtn }: IButtonFullProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        var isInFullScreen =
            document.fullscreenElement && document.fullscreenElement !== null;
        var docElm = document.documentElement;
        if (!isInFullScreen) {
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
        } else {
            document.exitFullscreen();
        }
    };

    return (
        <button
            className="px-2 py-2 outline-none"
            onClick={e => handleClick(e)}
        >
            {iconBtn}
        </button>
    );
};

export default ButtonFullScreen;
