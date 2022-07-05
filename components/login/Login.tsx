import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Link from 'next/link';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const [formLoginData, setFormLoginData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:8888/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formLoginData),
        })
            .then(res => res.json())
            .then(data => {
                authCtx.saveToken(data.accessToken);
                authCtx.saveUser(data.user);
                if (data?.accessToken) {
                    router.push('/');
                }
            });
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormLoginData({ ...formLoginData, [e.target.name]: e.target.value });
    };
    return (
        <div className="w-50 start-50 position-relavtive bg-danger">
            <form
                className="w-25 start-50 position-absolute translate-middle-x mt-3 p-5 bg-light dark:bg-[#1D1A1D]"
                onSubmit={e => handleSubmit(e)}
            >
                <div className="form-outline mb-4">
                    <label className="form-label">Email address</label>
                    <input
                        value={formLoginData.email}
                        onChange={e => handleChange(e)}
                        type="email"
                        name="email"
                        className="form-control"
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                        value={formLoginData.password}
                        onChange={e => handleChange(e)}
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 w-100"
                >
                    Sign in
                </button>

                <div className="text-center link-authenticate">
                    <p>
                        Not a member?{' '}
                        <Link href={'/sign-up'} passHref>
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
