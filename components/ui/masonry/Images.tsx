import React from 'react';
import { IImage } from '../../../model/image';

interface IImagesProps {
    data: IImage;
    min?: number;
    max?: number;
}

const Images = ({ data, min, max }: IImagesProps) => { 
    const hg = Number(min) +  Math.ceil(Math.random() * Number(max));
    return (
        <div
            className={`item-masonry item-${data.id}`}
        >
            <img src={data.url} alt={data.title} style={{height: hg}} />
        </div>
    );
};

export default Images;