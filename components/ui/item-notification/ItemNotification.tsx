import React, { useRef, useState } from 'react';
import { Notification } from '../../../model/notification';
import useOutside from '../../../hooks/useOutside';

type ItemNotificationProps = {
    notifications: Notification[];
};

const ItemNotification = ({ notifications = [] }: ItemNotificationProps) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState<boolean>(false);
    useOutside(ref, () => setVisible(false));
    return (
        <div className="flex mx-2 relative" ref={ref}> 
            <i className="bi bi-bell" onClick={() => setVisible(!visible)}>
                {visible && (
                    <div className="border bg-white  rounded-md mt-2 overflow-y-auto w-64 h-72 absolute right-0 left-auto">
                        {notifications?.length > 0 &&
                            notifications.map(notification => (
                                <div
                                    className="noti-item flex mt-2 border-bottom m-3"
                                    key={notification.id}
                                >
                                    <div className="mt-3 ml-2 flex">
                                        <img
                                            className="noti-img w-[40px] h-[40px] rounded-full object-cover"
                                            src={notification.img}
                                            alt=""
                                        />
                                        <div className="px-2">
                                            <p className="noti-title text-lg m-0">
                                                {notification.title}
                                            </p>
                                            <p className="noti-time text-xs text-slate-600">
                                                {notification.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </i>
            <div className="w-5 h-4 border-1 rounded-full absolute -top-3 left-auto -right-3 text-pink-900 border-pink-900">
                <p className="text-xs text-center flex justify-center">
                    {notifications.length}
                </p>
            </div>     
        </div>
    );
};

export default ItemNotification;
