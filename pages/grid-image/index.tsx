import React, { Fragment } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Masonry } from '../../components/ui/masonry';

const Images = dynamic(() => import('../../components/ui/masonry/Images'), {
    ssr: false,
});

const GridImagesPage = () => {
    const randomImage = () => {
        const list: any[] = [];
        for (let i = 1; i <= 40; i++) {
            list.push({
                id: i,
                url: `https://picsum.photos/200/300?random=${i}`,
                title: `title-${i}`,
            });
        }
        return list;
    };

    const data = randomImage();

    const test = data.slice(0,10);
    console.log(test.length);
    
    
    return (
        <>
            <Head>
                <title>Grid Images</title>
                <meta name="description" content="Grid Images" />
                <meta property="og:title" content="Grid Images" />
                <meta property="og:description" content="Grid Images" />
                <meta property="og:type" content="website" />
            </Head>
            <Masonry columns={7} gap={10}>
                {test.map(data => {   
                    const hg = 200 + Math.ceil(Math.random() * 300);                               
                    return (
                        <Images
                            key={data?.id}
                            data={data}
                            height={hg}
                        />
                    );
                })}
            </Masonry>
        </>
    );
};

export default GridImagesPage;
