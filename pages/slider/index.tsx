import Head from 'next/head';
import React, { Fragment } from 'react';
import { Slider } from '../../components/ui/slider';

const SliderPage = () => {
    const slides = [
        'https://picsum.photos/id/1032/1280/400',
        'https://picsum.photos/id/1033/1280/400',
        'https://picsum.photos/id/1037/1280/400',
        'https://picsum.photos/id/1035/1280/400',
        'https://picsum.photos/id/1036/1280/400',
    ];
    const multiSlides = [
        {
            color: 'bg-red-300',
            label: '1',
        },
        {
            color: 'bg-green-300',
            label: '2',
        },
        {
            color: 'bg-pink-300',
            label: '3',
        },
        {
            color: 'bg-blue-300',
            label: '4',
        },
        {
            color: 'bg-orange-300',
            label: '5',
        },
    ];
    return (
        <Fragment>
            <Head>
                <title>Slider</title>
                <meta name="description" content="Slider" />
                <meta property="og:title" content="Slider" />
                <meta property="og:description" content="Slider" />
                <meta property="og:type" content="website" />
            </Head>
            <div>
                <div className="h3 flex justify-center">Single Item</div>
                <Slider
                    interval={2000}
                    autoPlay={true}
                    button={true}
                    indicator={true}
                >
                    {slides.map((slide, index) => (
                        <img
                            src={slide}
                            alt={slide}
                            key={index}
                            style={{ height: '100%' }}
                        />
                    ))}
                </Slider>

                <div className="h3 flex justify-center mt-3">Multiple Item</div>
                <Slider
                    interval={5000}
                    button={true}
                    indicator={true}
                    autoPlay={false}
                    height={200}
                    slidesToShow={3}
                >
                    {multiSlides.map((slide, index) => (
                        <div
                            className={`flex justify-center h-100 ${slide.color}`}
                            key={index}
                        >
                            <h1 className="my-auto">{slide.label}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    );
};

export default SliderPage;
