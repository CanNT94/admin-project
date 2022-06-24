import React, { useRef } from 'react';
import { Notification } from '../../../model/notification';
import useOutside from '../../../hooks/useOutside';

type ItemNotificationProps = {
    notifications: Notification[];
};

const ItemNotification = ({ notifications = [] }: ItemNotificationProps) => {
    const ref = useRef(null);
    const visible = useOutside(ref);

    return (
        <div ref={ref}>
            <i className="bi bi-bell"></i>
            {visible && (
                <div className="border w-[220px]  rounded-[10px] mt-2 overflow-y-auto h-[240px]">
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
        </div>
    );
};

export default ItemNotification;
