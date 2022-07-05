import React from 'react';
import UserTest from './UserTest';

const SendBox = () => {
    return (
        <div>
            <div className="w-80 bg-slate-100 absolute -top-2 mt-12 rounded-xl px-3">
                <div className="text-center font-bold text-lg mt-2 ">
                    Send this Pin
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                    <div className="text-center">
                        <div className=" w-14 h-14 rounded-full">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
                                alt=""
                            />
                        </div>
                        <span className="text-xs font-thin">WhatsApp</span>
                    </div>
                    <div className="text-center">
                        <div className="border w-14 h-14 rounded-full">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                                alt=""
                            />
                        </div>
                        <span className="text-xs font-thin">Facebook</span>
                    </div>
                    <div className="text-center">
                        <div className="border w-14 h-14 rounded-full">
                            <img
                                src="https://openvisualfx.com/wp-content/uploads/2019/10/pnglot.com-twitter-bird-logo-png-139932.png"
                                alt=""
                            />
                        </div>
                        <span className="text-xs font-thin">Twitter</span>
                    </div>
                    <div className="text-center">
                        <div className="border w-14 h-14 rounded-full">
                            <img
                                src="https://i.pinimg.com/originals/1b/22/fd/1b22fd858e93265a3a2fa2060cfc1219.jpg"
                                alt=""
                            />
                        </div>
                        <span className="text-xs font-thin">Email</span>
                    </div>
                    <div className="text-center">
                        <div className="border w-14 h-14 rounded-full">
                            <img
                                src="http://cdn.onlinewebfonts.com/svg/img_211187.png"
                                alt=""
                            />
                        </div>
                        <span className="text-xs font-thin">Copy link</span>
                    </div>
                </div>

                <div>
                    <input
                        type="text"
                        className="w-100 rounded-md my-3 h-10 pl-3 border border-stone-700"
                        placeholder="Name or email"
                    />
                </div>
                <UserTest />
            </div>
        </div>
    );
};

export default SendBox;
