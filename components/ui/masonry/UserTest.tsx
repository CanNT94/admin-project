import React from 'react';

const UserTest = () => {
    return (
        <div>
            <div className="flex justify-between my-3">
                <div className="flex">
                    <div className="">
                        <img
                            src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                            alt=""
                            className="rounded-full w-10 h-10"
                        />
                    </div>
                    <div className="ml-2">
                        <div className="font-bold">Giang Bùi</div>
                        <div className="text-xs">giangblack97</div>
                    </div>
                </div>
                <div className="btn-save  bg-red-600 p-2 px-3 rounded-3xl text-white">
                    <button className="font-medium text-light">Send</button>
                </div>
            </div>
        </div>
    );
};

export default UserTest;
