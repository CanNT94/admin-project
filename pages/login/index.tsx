import Head from 'next/head';
import React, { Fragment } from 'react';
import Login from '../../components/login/Login';

const LoginPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Sign in</title>
                <meta name="description" content="Sign in" />
                <meta property="og:title" content="Sign in" />
                <meta property="og:description" content="Sign in" />
                <meta property="og:type" content="website" />
            </Head>
            <Login />
        </Fragment>
    );
};

export default LoginPage;
