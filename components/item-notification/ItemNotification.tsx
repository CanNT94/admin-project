import React from 'react';
import { Notification } from '../../model/notification';

type ItemNotificationProps = {
    infor: Notification;
};

const ItemNotification = (props: ItemNotificationProps) => {
    return (
        <div className="noti-item flex mt-2 border-bottom m-3">
            <div className="mt-3 ml-2 flex">
                <img
                    className="noti-img w-[40px] h-[40px] rounded-full object-cover"
                    src={props.infor.img}
                    alt=""
                />
                <div className="px-2">
                    <p className="noti-title text-lg m-0">
                        {props.infor.title}
                    </p>
                    <p className="noti-time text-xs text-slate-600">
                        {props.infor.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemNotification;
