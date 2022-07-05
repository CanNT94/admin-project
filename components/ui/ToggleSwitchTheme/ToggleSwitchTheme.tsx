import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ToggleSwitchTheme = () => {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('light');
    }, []);

    return (
        <div className="btn-switch-theme mx-2">
            <button
                id="tooltip_switch"
                type="button"
                className={theme !== 'dark' ? 'default' : 'dark-theme '}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <span className="switch-inner"></span>
            </button>
        </div>
    );
};

export default ToggleSwitchTheme;
