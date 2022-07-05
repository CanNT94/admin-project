import React, { useState } from 'react';
import { IImage } from '../../../model/image';
import Action from './Action';

interface IImagesProps {
    data: IImage;
}

const Images = ({ data }: IImagesProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    if (!data) {
        return <span>No items</span>;
    }

    return (
        <div
            className="relative"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className={`item-masonry item-${data.id}`}>
                <img src={data?.url} alt={data?.title} />
            </div>
            {isHover === true && <Action />}
        </div>
    );
};

export default Images;
