import React from 'react';

const Signup = () => {
    return (
        <div className="w-50 start-50 position-relavtive bg-danger">
            <form className="w-25 start-50 position-absolute translate-middle-x mt-3 p-5 bg-light">
                <div className="form-outline mb-4">
                    <label className="form-label">Email address</label>
                    <input type="email" id="email" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">User Name</label>
                    <input type="text" id="userName" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary btn-block mb-4 w-100"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Signup;
