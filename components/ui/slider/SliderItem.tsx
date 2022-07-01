import React from 'react';

interface SliderItemProps {
    slide: string;
    width?: number;
    height?: number;
    stopSlide: () => void;
    startSlide: () => void;
}

const SliderItem = ({
    slide,
    stopSlide,
    startSlide,
    width,
    height,
}: SliderItemProps) => {
    return (
        <div
            className="slider-item"
            onMouseEnter={stopSlide}
            onMouseOut={startSlide}
            style={{ width: width, height: height }}
        >
            <img
                src={slide}
                alt="slide"
                style={{ display: 'block', width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default SliderItem;
