import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Masonry } from '../../components/ui/masonry';
import { IImage } from '../../model/image';
import { Loading } from '../../components/ui/loading';

const Images = dynamic(() => import('../../components/ui/masonry/Images'), {
    ssr: false,
});

const GridImagesPage = () => {
    const [dataImages, setDataImages] = useState<IImage[]>([]);
    const [limit, setLimit] = useState<number>(20);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:8888/masonry?_limit=${limit}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setDataImages(data);
            });
    }, [limit]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems();
    }, [isFetching]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        setIsFetching(true);
    };

    const fetchMoreListItems = () => {
        setTimeout(() => {
            setLimit(limit => (limit = limit + 10));
            setIsFetching(false);
        }, 4000);
    };

    console.log(isFetching);
    

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
                {dataImages.map(data => {
                    const hg = 200 + Math.ceil(Math.random() * 300);                   
                    return (
                        <Images key={data?.id} data={data} height={hg} />
                    )
                })}
                
            </Masonry>
            {isFetching === true && <Loading />}
        </>
    );
};

export default GridImagesPage;
