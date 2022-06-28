import React from 'react';

interface SliderIndicatorProps {
    slides: string[];
    currentIndex: number;
    switchIndex: (index: number) => void;
}

const SliderIndicator = ({
    slides,
    currentIndex,
    switchIndex,
}: SliderIndicatorProps) => {
    return (
        <div className="slider-indicators">
            {slides.map((_, index) => (
                <button
                    className={`slider-indicator-item${
                        currentIndex === index ? ' active' : ''
                    }`}
                    onClick={() => switchIndex(index)}
                    key={index}
                ></button>
            ))}
        </div>
    );
};
export default SliderIndicator;
