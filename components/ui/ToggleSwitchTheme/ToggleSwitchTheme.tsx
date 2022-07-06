import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ToggleSwitchTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    useEffect(() => {
        if (!systemTheme) {
            setTheme('light');
        }
    });
    return (
        <div className="btn-switch-theme mx-2">
            <button
                id="tooltip_switch"
                type="button"
                className={theme === 'dark' ? 'dark-theme' : ''}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                <span className="switch-inner"></span>
            </button>
        </div>
    );
};

export default ToggleSwitchTheme;
