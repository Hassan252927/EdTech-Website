import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';


const Layout = () => {
    return (
        <div style={{ display: 'flex' }}>
             <Sidebar/>
            <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Outlet /> {/* This will render the child routes */}
            </div>
        </div>
    );
};

export default Layout;
