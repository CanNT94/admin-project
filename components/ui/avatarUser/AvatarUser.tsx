import React from 'react';
import * as Icon from 'react-bootstrap-icons';

interface IAvatarProps {
    name: string | undefined;
    srcImg?: string;
    altImg?: string;
}

const AvatarUser = ({ name, srcImg, altImg }: IAvatarProps) => {
    return (
        <div className="flex justify-center items-center">
            <span className="text-xs leading-6">{name}</span>
            <span className="ml-3">
                {srcImg === undefined ? (
                    <Icon.PersonCircle style={{fontSize: '25px'}} />
                ) : (
                    <img
                        className="w-10 rounded-full"
                        src={srcImg}
                        alt={altImg}
                    />
                )}
            </span>
        </div>
    );
};

export default AvatarUser;
