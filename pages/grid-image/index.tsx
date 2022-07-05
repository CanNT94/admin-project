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
    const [record, setRecord] = useState<number>(0);
    const [col, setCol] = useState<number>(250);
    const limit = 15;
    useLayoutEffect(() => {
        const fetchDataMasonry = async () => {
            try {
                // If not set _limit default = 10
                const res = await fetch(
                    `http://localhost:8888/masonry?_page=${pg}&_limit=${limit}`
                );
                const data = await res.json();
                const record = await res.headers.get('X-Total-Count');
                setDataImages([...dataImages, ...data]);
                setRecord(Number(record));
            } catch (error) {
                console.log('Error Fetch data:' + error);
            }
        };
        fetchDataMasonry();
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

    const checkOverLoad = () => {
        let flag = false;
        const totalPage = Math.ceil(record / limit);
        pg >= totalPage ? (flag = true) : (flag = false);
        return flag;
    };

    const handleClick = (option: number) => {
        switch (option) {
            case 250:
                setCol(option);
                break;
            case 300:
                setCol(option);
                break;
            case 400:
                setCol(option);
                break;
            case 500:
                setCol(option);
                break;
            default:
                break;
        }
    };

    const flag = checkOverLoad();

    const masontyOptions = [
        {
            id: 1,
            columnWidth: 250,
            column: 'col-6',
        },
        {
            id: 2,
            columnWidth: 300,
            column: 'col-5',
        },
        {
            id: 3,
            columnWidth: 400,
            column: 'col-4',
        },
        {
            id: 4,
            columnWidth: 500,
            column: 'col-3',
        },
    ];

    return (
        <>
            <Head>
                <title>Grid Images</title>
                <meta name="description" content="Grid Images" />
                <meta property="og:title" content="Grid Images" />
                <meta property="og:description" content="Grid Images" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="option-demo">
                <ul>
                    {masontyOptions.map(option => (
                        <li
                            key={option.id}
                            className={`${
                                col === option.columnWidth
                                    ? 'active ' + option.column
                                    : option.column
                            }`}
                            onClick={() => handleClick(option.columnWidth)}
                        ></li>
                    ))}
                </ul>
            </div>
            <Masonry gap={15} columnWidth={col}>
                {dataImages.map(data => {
                    return <Images key={data?.id} data={data} />;
                })}
            </Masonry>
            {isFetching === true && flag === false && <Loading />}
        </>
    );
};

export default GridImagesPage;
