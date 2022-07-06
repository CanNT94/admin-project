import React from 'react';

const ShadowBox = () => {
    return (
        <div className="w-80 bg-slate-100 absolute bottom-full mb-2 right-2 left-auto rounded-xl px-2 ">
            <div className="text-sm mt-2 text-center">
                This Pin was inspired by your recent activity
            </div>
            <div className="my-2 text-base">
                <button className="font-bold block p-2 text-left w-full hover:bg-slate-200 focus:bg-violet-700  rounded-md">
                    Hide Pin
                </button>
                <button className="font-bold block p-2 text-left w-full hover:bg-slate-200 rounded-md">
                    Download image
                </button>
                <button className="font-bold block p-2 text-left w-full hover:bg-slate-200 rounded-md">
                    Report Pin
                </button>
            </div>
        </div>
    );
};

export default ShadowBox;
