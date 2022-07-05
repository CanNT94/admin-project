import React, { useEffect, useState } from 'react';
import { SSendUser } from '../../../model/sendUser';

const UserTest = () => {
    const [users, setUsers] = useState<SSendUser[]>([]);
    useEffect(() => {
        fetch('http://localhost:8888/senduser', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    return (
        <div>
            <div className="flex justify-between mb-3">
                <div className="w-full overflow-y-auto h-52">
                    {users.map(user => (
                        <div
                            key={user.id}
                            className="flex my-2 justify-between"
                        >
                            <div className="flex">
                                <img
                                    className="rounded-full w-10 h-10"
                                    src={user.img}
                                    alt=""
                                />
                                <div className="ml-2">
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-xs text-slate-400">
                                        {user.userName}
                                    </div>
                                </div>
                            </div>

                            <div className="btn-save  bg-red-600 p-2 px-3 rounded-3xl text-white mr-2">
                                <button className="font-medium text-light">
                                    Send
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserTest;
