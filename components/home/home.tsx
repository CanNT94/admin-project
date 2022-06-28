import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ITableSeller } from '../../model/seller';
import TableSeller from '../ui/tableSeller/TableSeller';
import { Masonry } from '../ui/masonry';

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

    const masonry = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
            title: 'This is title 1',
            time: '2013',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            title: 'This is title 2',
            time: '2014',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'This is title 3',
            time: '2015',
        },
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
            title: 'This is title 1',
            time: '2013',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            title: 'This is title 2',
            time: '2014',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'This is title 3',
            time: '2015',
        },
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
            title: 'This is title 1',
            time: '2013',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            title: 'This is title 2',
            time: '2014',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'This is title 3',
            time: '2015',
        },
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
            title: 'This is title 1',
            time: '2013',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            title: 'This is title 2',
            time: '2014',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
            title: 'This is title 3',
            time: '2015',
        },
    ];

    return (
        <>
            <div className="container-fluid">
                <div className="dashboard-wrapper">
                    <Masonry columns={4}>
                        {masonry.map(key => {
                            const height = 200 + Math.ceil(Math.random() * 300);
                            return (
                                <div key={key.id}>
                                    <img
                                        style={{ height: `${height}px` }}
                                        src={key.img}
                                        alt={key.title}
                                    />
                                </div>
                            );
                        })}
                    </Masonry>
                </div>
            </div>
        </>
    );
};

export default Login;
