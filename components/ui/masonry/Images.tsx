import React from 'react';
import { IImage } from '../../../model/image';

interface IImagesProps {
    data: IImage;
    min?: number;
    max?: number;
}

// btn btn-primary btn-xs absolute top-0 right-0 rounded-full m-3 w-2
const Images = ({ data, min, max }: IImagesProps) => {
    const hg = Number(min) + Math.ceil(Math.random() * Number(max));
    if (!data) {
        return <span>No items</span>
    }
    return (
        <div className={`item-masonry item-${data.id} relative`}>
            <img src={data?.url} alt={data?.title} style={{ height: hg }} />
            <div className="btn-save hidden">
                <button className="btn absolute top-3 right-3 !bg-red-600 text-white font-bold">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Images;
