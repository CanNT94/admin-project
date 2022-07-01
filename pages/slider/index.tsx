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
                    slides={slides}
                    interval={5000}
                    button={true}
                    indicator={true}
                    autoPlay={true}
                />

                <div className="h3 flex justify-center mt-3">Multiple Item</div>
                <Slider
                    slides={slides}
                    interval={5000}
                    button={true}
                    indicator={true}
                    autoPlay={false}
                    slidesToShow={3}
                />
            </div>
        </Fragment>
    );
};

export default SliderPage;
