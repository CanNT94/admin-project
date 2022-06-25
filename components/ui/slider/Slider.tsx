import React, { useState, useEffect } from 'react';
import Navigations from './Navigations';
import Panigations from './Panigations';
import SliderItem from './SliderItem';
import styles from './slider.module.css';

interface Slider {
    title: string;
    link: string;
    description: string;
    image: string;
    textLink: string;
    textPosition: string;
}

interface SliderProps {
    showNavs?: boolean;
    showDots?: boolean;
    interval?: number;
    slides?: Slider[];
    autoPlay?: boolean;
    width?: number | string;
}

const slidesData = [
    {
        title: 'Have a Good Day',
        link: '/',
        textLink: 'Shop Now',
        description: 'Adventure is never far away',
        image: '/assets/images/slide-1.jpg',
        textPosition: 'center',
    },
    {
        title: 'Chamonix',
        link: '/',
        textLink: 'Shop Now',
        description: 'Let your dreams come true',
        image: '/assets/images/slide-2.jpg',
        textPosition: 'left',
    },
    {
        title: 'Mimisa Rocks',
        link: '/',
        textLink: 'Promotion Name',
        description: 'A piece of heaven',
        image: '/assets/images/slide-1.jpg',
        textPosition: 'right',
    },
    {
        title: '',
        link: '/',
        textLink: '',
        description: '',
        image: '/assets/images/slide-2.jpg',
        textPosition: '',
    },
];

const Slider = ({
    showNavs = true,
    showDots = true,
    interval = 5000,
    slides = slidesData,
    autoPlay = false,
    width = '100%',
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
    // This function calculates width SliderSize
   

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
        <div className={`slider `} style={{ maxWidth: width }}>
            <div className={`slider-wapper ${styles.sliderWapper}`}>
                <div
                    className={`items ${styles.sliderItems}`}
                    style={{
                        transform: `translateX(${-currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <SliderItem
                            slide={slide}
                            key={index}
                            stopSlide={stopSlideTimer}
                            startSlide={startSlideTimer}
                        />
                    ))}
                </div>
                {showNavs && <Navigations prev={prev} next={next} />}
                {showDots && (
                    <Panigations
                        slides={slides}
                        currentIndex={currentSlide}
                        switchIndex={switchIndex}
                    />
                )}
            </div>
        </div>
    );
};

export default Slider;
