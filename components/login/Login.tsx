import React from 'react';
import Link from 'next/link';

const Login = () => {
    console.log('aaaaa');
    return (
        <div className="w-50 start-50 position-relavtive bg-danger">
            <form className="w-25 start-50 position-absolute translate-middle-x mt-3 p-5 bg-light">
                <div className="form-outline mb-4">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        id="form2Example1"
                        className="form-control"
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        id="form2Example2"
                        className="form-control"
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary btn-block mb-4 w-100"
                >
                    Sign in
                </button>

                <div className="text-center">
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
