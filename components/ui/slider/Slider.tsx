import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { SliderButton, SliderIndicator, SliderItem } from './index';
import { useSwipeable } from 'react-swipeable';

interface SliderProps {
    interval?: number;
    button?: boolean;
    indicator?: boolean;
    autoPlay?: boolean;
    width?: number;
    height?: number;
    slidesToShow?: number;
    children?: ReactElement[];
    swipe?: boolean;
    swipeDuration?: number;
}
const Slider = ({
    interval = 3000,
    button = false,
    indicator = false,
    autoPlay = true,
    width = 900,
    height = 300,
    slidesToShow = 1,
    children = [],
    swipe = true,
    swipeDuration = 500,
}: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
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
    const handleSwipe = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => prev(),
        preventScrollOnSwipe: true,
        trackMouse: swipe,
        swipeDuration: swipeDuration,
    });
    const switchIndex = (index: number) => {
        startSlideTimer();
        setCurrentSlide(index);
    };

    return (
        <div
            {...handleSwipe}
            className="slider cursor-pointer"
            style={{ width: width, height: height }}
        >
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
