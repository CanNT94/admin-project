import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ITableSeller } from '../../model/seller';
import { Masonry } from '../ui/masonry';
import Images from '../ui/masonry/Images';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const { t } = useTranslation();
    const [sellerData, setSellerData] = useState<ITableSeller[]>([]);
    const [totalData, setTotalData] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            router.push('/login');
        }
    }, []);

    // Init data sellers

    useEffect(() => {
        const fetchDataSeller = async () => {
            try {
                const requests = {
                    url: 'http://localhost:8888',
                    limit: 6,
                };
                await fetch(
                    `${requests.url}/sellers?_page=${page}&_limit=${requests.limit}`,
                    {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    }
                )
                    .then(res => {
                        setTotalData(Number(res?.headers.get('X-Total-Count')));
                        return res.json();
                    })
                    .then(data => {
                        setSellerData(data);
                    });
            } catch (error) {
                console.log('Error fetch data:' + error);
            }
        };
        fetchDataSeller();
    }, [page]);

    const columns: ITableSeller[] = [
        {
            id: 1,
            name: 'Name',
        },
        {
            id: 2,
            name: 'Sales',
        },
        {
            id: 3,
            name: 'Stock',
        },
    ];

    const randomImage = () => {
        const list: any[] = [];
        for(let i = 1; i <= 40; i++){
            list.push({id: i, url: `https://picsum.photos/200/300?random=${i}`, title: `title-${i}`});
        }
        return list;
    }

    const data = randomImage();

    return (
        <div className="container-fluid">
            <div className="dashboard-wrapper">
                <Masonry columns={5} gap={10}>
                    {data.map(data => {
                        return <Images key={data.id} data={data} min={200} max={300} />
                    })}
                </Masonry>
            </div>
        </div>
    );
};

export default Login;
