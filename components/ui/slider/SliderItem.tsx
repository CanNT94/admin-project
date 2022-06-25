import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './slider.module.css';

interface Slider {
    title: string;
    link: string;
    description: string;
    image: string;
    textLink: string;
    textPosition: string;
}

interface SliderItemProps {
    slide: Slider;
    stopSlide: () => void;
    startSlide: () => void;
}

const SliderItem = ({ slide, stopSlide, startSlide }: SliderItemProps) => {
    const textPosition = slide.textPosition;
    return (
        <div
            className={`item ${styles.SliderItem}`}
            onMouseEnter={stopSlide}
            onMouseOut={startSlide}
        >
            <Link href={slide.link} passHref>
                <a className="link">
                    {/* <img src={slide.image} alt="slide" /> */}
                    <Image
                        src={slide.image} // Route of the image file
                        width="1920"
                        height="700"
                        alt="Your Name"
                    />
                    <div
                        className={`content ${styles.SliderItemContent} ${
                            styles[`${textPosition}Text`]
                        }`}
                    >
                        <h2 className={`title ${styles.SliderItemTitle}`}>
                            {slide.title}
                        </h2>
                        <p
                            className={`dercription ${styles.SliderItemDercription}`}
                        >
                            {slide.description}
                        </p>
                        <a className={`link ${styles.SliderItemLink}`}>
                            {slide.textLink}
                        </a>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default SliderItem;
