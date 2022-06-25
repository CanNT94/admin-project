import React from 'react';
import styles from './slider.module.css'

interface Slider {
    title: string;
    link: string;
    description: string;
    image: string;
    textLink: string;
    textPosition: string;
}

interface PanigationsProps {
    slides: Slider[];
    currentIndex: number;
    switchIndex: (index: number) => void;
}

const Panigations = ({
    slides,
    currentIndex,
    switchIndex,
}: PanigationsProps) => {
    return (
        <div
            className={`dots ${styles.dots}`}
        >
            {slides.map((_, index) => (
                <button
                    className={`item ${currentIndex === index ? styles.dotsItemActive : styles.dotsItem} `}
                    onClick={() => switchIndex(index)}
                    key={index}
                ></button>
            ))}
        </div>
    );
};
export default Panigations;
