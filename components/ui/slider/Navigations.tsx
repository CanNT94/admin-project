import React from 'react';
import styles from './slider.module.css'

interface NavsProps {
    prev: () => void;
    next: () => void;
}

const Navigations = ({ prev, next }: NavsProps) => {
    return (
        <div className={`navs`}
        >
            <button
                className={`nav-pre ${styles.navPre}`}
                onClick={prev}
            >
                <i className="bi bi-chevron-left"></i>
            </button>
            <button
                className={`nav-next ${styles.navNext}`}
                onClick={next}
            >
                <i className="bi bi-chevron-right"></i>
            </button>
        </div>
    );
};

export default Navigations;
