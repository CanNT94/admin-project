import '../styles/global.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/auth-context';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../translation/i18n';

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
    console.log('i18n', i18n)
    const isLogin = ['/login', '/sign-up'].includes(appProps.router.pathname);
    return (
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
    );
}

export default MyApp;
