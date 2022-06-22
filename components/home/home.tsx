import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            router.push('/login');
        }
    }, []);
    return <div className="flex justify-center h1">Home Page</div>;
};

export default Login;
