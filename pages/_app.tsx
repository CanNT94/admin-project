import '../styles/global.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/auth-context';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
    const isLogin = ['/login', '/sign-up'].includes(appProps.router.pathname);
    return (
        <AuthContextProvider>
            <Provider store={store}>
                {isLogin && <Component {...pageProps} />}
                {!isLogin && (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </Provider>
        </AuthContextProvider>
    );
}

export default MyApp;
