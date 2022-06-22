import React from 'react';

const ItemNotification = () => {
    return (
        <div className="noti-item flex mt-2 border-bottom m-3">
            <div className="mt-3 ml-2 flex">
                <img
                    className="noti-img w-[40px] h-[40px] rounded-full object-cover"
                    src="https://img.thuthuat123.com/uploads/2019/07/15/anh-bong-hoa-hong-bay-mau_105817556.jpg"
                    alt=""
                />
                <div className="px-2">
                    <p className="noti-title text-lg m-0">This is title</p>
                    <p className="noti-time text-xs text-slate-600">
                        Date time now
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ItemNotification;

// width: 50px;
//   height: 50px;
//   border-radius: 100rem;
//   object-fit: cover;
//   flex-shrink: 0;
