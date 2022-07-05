import React, { useEffect, useLayoutEffect, useState } from 'react';
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
    const [pg, setPg] = useState<number>(1);
    const [isFetching, setIsFetching] = useState(false);
    useLayoutEffect(() => {
        fetch(`http://localhost:8888/masonry?_page=${pg}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setDataImages([...dataImages, ...data]);
            });
    }, [pg]);

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
            setPg(pg => (pg = pg + 1));
            setIsFetching(false);
        }, 1000);
    };

    return (
        <>
            <Head>
                <title>Grid Images</title>
                <meta name="description" content="Grid Images" />
                <meta property="og:title" content="Grid Images" />
                <meta property="og:description" content="Grid Images" />
                <meta property="og:type" content="website" />
            </Head>
            <Masonry gap={15}>
                {dataImages.map(data => {
                    return <Images key={data?.id} data={data} />;
                })}
            </Masonry>
            {isFetching === true && <Loading />}
        </>
    );
};

export default GridImagesPage;
