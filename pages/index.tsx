import React, { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../components/home/home';

const HomePage: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home" />
                <meta property="og:title" content="Home" />
                <meta property="og:description" content="Home" />
                <meta property="og:type" content="website" />
            </Head>
            <Home />
        </Fragment>
    );
};

export default HomePage;
