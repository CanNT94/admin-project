import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import { Panigation } from '../ui/panigation';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            router.push('/login');
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className="h3 flex justify-center">Pagination</div>
            <div className="dashboard-wrapper">
                <Panigation
                    total={200}
                    per_page={10}
                    current_page={1}
                    maxPageToDispaly={5}
                />
            </div>
        </div>
    );
};

export default Login;
