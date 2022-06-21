import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';

const Signup = () => {
    const router = useRouter();
    const [formSignupData, setFormSignupData] = useState({
        email: '',
        password: '',
        userName: '',
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch('http://localhost:8888/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formSignupData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.accessToken) {
                    router.push('/login');
                }
            });
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormSignupData({
            ...formSignupData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div className="w-50 start-50 position-relavtive bg-danger">
            <form
                className="w-25 start-50 position-absolute translate-middle-x mt-3 p-5 bg-light"
                onSubmit={e => handleSubmit(e)}
            >
                <div className="form-outline mb-4">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        className="form-control"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={e => handleChange(e)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 w-100"
                >
                    Sign up
                </button>

                <div className="text-center">
                    <p>
                        <Link href={'/login'} passHref>
                            Back to Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
