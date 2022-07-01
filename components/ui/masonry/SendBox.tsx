import React from 'react';

const SendBox = () => {
    return (
        <div>
            <div className="w-80 bg-slate-100 absolute -top-2 mt-12 rounded-xl px-3">
                <span className="text-sm">
                    This Pin was inspired by your recent activity
                </span>
                <div className="my-2 text-lg">
                    <button className="font-bold block mt-1">Test</button>
                    <button className="font-bold block mt-1">Test</button>
                    <button className="font-bold block mt-1">Test</button>
                </div>
            </div>
        </div>
    );
};

export default SendBox;
