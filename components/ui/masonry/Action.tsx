import React, { useRef, MutableRefObject, useState, useEffect } from 'react';
import SendBox from './SendBox';
import ShadowBox from './ShadowBox';

const Action = () => {
    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    const handleClick1 = () => {
        setIsShown1(current => !current);
    };

    return (
        <div>
            {/* Test */}
            <div className="btn-save absolute top-3 right-3 bg-red-600 p-3 rounded-3xl text-white">
                <button className="font-medium">Save</button>
            </div>
            <div className="absolute left-0 right-auto bottom-0 flex justify-end items-center w-full z-10">
                <div className="flex">
                    <span className="rounded-full bg-white w-8 h-8 flex justify-center items-center mr-2 mb-3 cursor-pointer relative">
                        <i
                            className="bi bi-cloud-arrow-up"
                            onClick={handleClick1}
                        ></i>
                    </span>
                    {isShown1 && <SendBox />}

                    <span className="rounded-full bg-white w-8 h-8 flex justify-center items-center mr-2 mb-3 cursor-pointer ">
                        <i
                            className="bi bi-three-dots"
                            onClick={handleClick}
                        ></i>
                        {isShown && <ShadowBox />}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Action;
