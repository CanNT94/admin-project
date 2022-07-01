import React, { useCallback, useState } from 'react';
import { IImage } from '../../../model/image';
import Action from "./Action";

interface IImagesProps {
    data: IImage;
    height?: number
}

const Images = ({ data, height }: IImagesProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    if (!data) {
        return <span>No items</span>;
    }


    return (
        <div
            className="mb-3 relative"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
        >
            <div className={`mb-2 item-masonry item-${data.id}`}>
                <img src={data?.url} alt={data?.title} style={{ height: height }} />
            </div>
            {isHover === true && <Action />}
        </div>
    );
};

export default Images;
