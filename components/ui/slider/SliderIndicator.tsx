import React from 'react';

interface SliderIndicatorProps {
    length: number;
    currentIndex: number;
    switchIndex: (index: number) => void;
}

const SliderIndicator = ({
    length = 0,
    currentIndex,
    switchIndex,
}: SliderIndicatorProps) => {
    return (
        <div className="slider-indicators">
            {Array.from(Array(length).keys()).map((_, index) => (
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
