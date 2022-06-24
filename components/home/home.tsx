import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth-context';
import { useRouter } from 'next/router';
import ItemNotification from '../item-notification/ItemNotification';
import { Notification } from '../../model/notification';

const Login = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [datas, setDatas] = useState<Notification[]>([]);

    useEffect(() => {
        if (!authCtx.isLoggedIn) {
            router.push('/login');
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:8888/notification', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            });
    }, []);

    return (
        <>
            <div className="flex justify-center h1">Home Page</div>;
            <div>
                <div className="">
                    <svg
                        onClick={() => setToggle(!toggle)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer relative"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                    {toggle ? (
                        <div className="border w-[220px]  rounded-[10px] mt-2 overflow-y-auto h-[240px]">
                            {datas?.length > 0 &&
                                datas.map(item => (
                                    <ItemNotification
                                        key={item.id}
                                        infor={item}
                                    ></ItemNotification>
                                ))}
                        </div>
                    ) : (
                        ''
                    )}{' '}
                </div>
            </div>
            <button onClick={authCtx.logout} className="btn btn-primary">
                Sign out
            </button>
        </>
    );
};

export default Login;
