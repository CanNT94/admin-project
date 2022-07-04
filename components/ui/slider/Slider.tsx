import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { SliderButton, SliderIndicator, SliderItem } from './index';

interface SliderProps {
    interval?: number;
    button?: boolean;
    indicator?: boolean;
    autoPlay?: boolean;
    width?: number;
    height?: number;
    slidesToShow?: number;
    children?: ReactElement[];
}
const Slider = ({
    interval = 3000,
    button = false,
    indicator = false,
    autoPlay = true,
    width = 1000,
    height = 400,
    slidesToShow = 1,
    children = [],
}: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideInterval = useRef<number>();

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer();
            slideInterval.current = window.setInterval(() => {
                setCurrentSlide(currentSlide =>
                    currentSlide < children.length - 1 ? currentSlide + 1 : 0
                );
            }, interval);
        }
    };

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval) {
            clearInterval(slideInterval.current);
        }
    };

    useEffect(() => {
        startSlideTimer();
        return () => stopSlideTimer();
    }, []);

    const prev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : children.length - 1;
        setCurrentSlide(index);
    };

    const next = () => {
        startSlideTimer();
        const index = currentSlide < children.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    };
    const switchIndex = (index: number) => {
        startSlideTimer();
        setCurrentSlide(index);
    };

    return (
        <div className="slider" style={{ maxWidth: width, maxHeight: height }}>
            <div
                className="slider-inner"
                style={{
                    transform: `translateX(${
                        (-currentSlide * 100) / slidesToShow
                    }%)`,
                }}
            >
                {children?.map((child, index) => (
                    <SliderItem
                        width={width / slidesToShow}
                        height={height}
                        key={index}
                        stopSlide={stopSlideTimer}
                        startSlide={startSlideTimer}
                    >
                        {child}
                    </SliderItem>
                ))}
            </div>
            {indicator && (
                <SliderIndicator
                    length={children?.length}
                    currentIndex={currentSlide}
                    switchIndex={switchIndex}
                />
            )}
            {button && <SliderButton prev={prev} next={next} />}
        </div>
    );
};

export default Slider;
