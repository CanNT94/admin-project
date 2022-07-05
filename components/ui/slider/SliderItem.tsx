import React, { ReactElement } from 'react';

interface SliderItemProps {
    children?: ReactElement;
    width?: number;
    height?: number;
    stopSlide: () => void;
    startSlide: () => void;
}

const SliderItem = ({
    children,
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
            {children}
        </div>
    );
};

export default SliderItem;
