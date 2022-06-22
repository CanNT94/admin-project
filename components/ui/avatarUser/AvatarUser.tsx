import React from "react";

interface IAvatarProps {
    name: string;
    srcImg: string;
    altImg: string;
}

const AvatarUser = ({name, srcImg, altImg}: IAvatarProps) => {
    return (
        <div className="flex justify-center items-center">
            <span className="text-xs">{name}</span>
            <span className="ml-3">
                <img className="w-10 rounded-full" src={srcImg} alt={altImg} />
            </span>
        </div>
    )
}

export default AvatarUser;