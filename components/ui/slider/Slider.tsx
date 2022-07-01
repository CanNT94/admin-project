import React, { useEffect, useState } from 'react';
import { SliderButton, SliderIndicator, SliderItem } from './index';

interface SliderProps {
    slides: string[];
    interval?: number;
    button?: boolean;
    indicator?: boolean;
    autoPlay?: boolean;
    width?: number;
    height?: number;
    slidesToShow?: number;
}
const Slider = ({
    slides = [],
    interval = 3000,
    button = false,
    indicator = false,
    autoPlay = true,
    width = 1000,
    height = 400,
    slidesToShow = 1,
}: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    let slideInterval: number;

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer();
            slideInterval = window.setInterval(() => {
                setCurrentSlide(currentSlide =>
                    currentSlide < slides.length - 1 ? currentSlide + 1 : 0
                );
            }, interval);
        }
    };

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval) {
            clearInterval(slideInterval);
        }
    };

    useEffect(() => {
        startSlideTimer();
        return () => stopSlideTimer();
    }, []);

    const prev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        setCurrentSlide(index);
    };

    const next = () => {
        startSlideTimer();
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
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
                {slides.map((slide, index) => (
                    <SliderItem
                        width={width / slidesToShow}
                        height={height}
                        slide={slide}
                        key={index}
                        stopSlide={stopSlideTimer}
                        startSlide={startSlideTimer}
                    />
                ))}
            </div>
            {indicator && (
                <SliderIndicator
                    slides={slides}
                    currentIndex={currentSlide}
                    switchIndex={switchIndex}
                />
            )}
            {button && <SliderButton prev={prev} next={next} />}
        </div>
    );
};

export default Slider;
