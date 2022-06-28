import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ITableSeller } from '../../model/seller';
import TableSeller from '../ui/tableSeller/TableSeller';

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
                } 
                await fetch(`${requests.url}/sellers?_page=${page}&_limit=${requests.limit}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(res => {                    
                        setTotalData(Number(res?.headers.get('X-Total-Count')));
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
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

    return (
        <>
            <div className="container-fluid">
                <div className="dashboard-wrapper">
                    <TableSeller dataSource={sellerData} columns={columns} />
                </div>
            </div>
        </>
    );
};

export default Login;
