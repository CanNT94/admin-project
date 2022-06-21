import Head from 'next/head';
import React, { Fragment } from 'react';
import Signup from '../../components/sign-up/SignUp';

const SignupPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Sign up</title>
                <meta name="description" content="Sign up" />
                <meta property="og:title" content="Sign up" />
                <meta property="og:description" content="Sign up" />
                <meta property="og:type" content="website" />
            </Head>
            <Signup />
        </Fragment>
    );
};

export default SignupPage;
