import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import { Masonry } from '../ui/masonry';
import Images from '../ui/masonry/Images';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            router.push('/login');
        }
    }, []);

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
                <Masonry columns={7} gap={10}>
                    {data.map(data => {
                        return <Images key={data?.id} data={data} min={200} max={300} />
                    })}
                </Masonry>
            </div>
        </div>
    );
};

export default Login;