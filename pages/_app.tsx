import '../styles/global.scss';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/auth-context';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
    const isLogin = ['/login', '/sign-up'].includes(appProps.router.pathname);
    return (
        <AuthContextProvider>
            {isLogin && <Component {...pageProps} />}
            {!isLogin && (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </AuthContextProvider>
    );
}

export default MyApp;
