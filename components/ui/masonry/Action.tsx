import React, { useRef, MutableRefObject, useState, useEffect } from 'react';

const Action = () => {
    return (
        <div className="absolute left-0 right-auto bottom-0 flex justify-end items-center w-full z-10">
            <span className="rounded-full bg-white w-8 h-8 flex justify-center items-center mr-2 mb-3 cursor-pointer">
                <i className="bi bi-cloud-arrow-up"></i>
            </span>
            <span className="rounded-full bg-white w-8 h-8 flex justify-center items-center mr-2 mb-3 cursor-pointer">
                <i className="bi bi-three-dots"></i>
            </span>
        </div>
    );
};

export default Action;
