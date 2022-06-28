import React from 'react';

interface SliderItemProps {
    slide: string;
    stopSlide: () => void;
    startSlide: () => void;
}

const SliderItem = ({ slide, stopSlide, startSlide }: SliderItemProps) => {
    return (
        <div
            className="slider-item"
            onMouseEnter={stopSlide}
            onMouseOut={startSlide}
        >
            <img src={slide} alt="slide" />
        </div>
    );
};

export default SliderItem;
