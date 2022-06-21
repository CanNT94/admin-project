import '../styles/globals.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/auth-context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}

export default MyApp;
