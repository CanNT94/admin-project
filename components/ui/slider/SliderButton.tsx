import React from 'react';

interface SliderButtonProps {
    prev: () => void;
    next: () => void;
}

const SliderButton = ({ prev, next }: SliderButtonProps) => {
    return (
        <div>
            <button className="slider-button left" onClick={prev}>
                <i className="bi bi-arrow-left-circle text-xl"></i>
            </button>
            <button className="slider-button right text-xl" onClick={next}>
                <i className="bi bi-arrow-right-circle"></i>
            </button>
        </div>
    );
};

export default SliderButton;
