import Head from 'next/head';
import React, { Fragment } from 'react';
import Slider from '../../components/ui/slider/Slider';

const SliderPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Slider</title>
                <meta name="description" content="Slider" />
                <meta property="og:title" content="Slider" />
                <meta property="og:description" content="Slider" />
                <meta property="og:type" content="website" />
            </Head>
            <Slider></Slider>
        </Fragment>
    );
};

export default SliderPage;
