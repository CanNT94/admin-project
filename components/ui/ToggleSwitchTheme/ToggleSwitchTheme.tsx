import React, { useState } from 'react';

const ToggleSwitchTheme = () => {
    const [isActive, setActive] = useState('true');

    const changeTheme = () => {
        setActive(!isActive);
    };

    return (
        <div className="btn-switch-theme mr-2">
            <button
                id="tooltip_switch"
                type="button"
                className={isActive ? 'default' : 'dark-theme '}
                onClick={changeTheme}
            >
                <span className="switch-inner"></span>
            </button>
        </div>
    );
};

export default ToggleSwitchTheme;