import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="main-menu">
                <div className="scroll">
                    <div className="scrollbar-container ps">Main Menu</div>
                </div>
            </div>

            <div className="sub-menu">
                <div className="scroll">
                    <div className="scrollbar-container ps">Sub menu</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
