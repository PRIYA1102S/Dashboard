import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen md:sticky top-0">
            <div className="p-4 text-2xl font-bold">Dashboard</div>
            <ul>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                    <Link to="/documentation">Documentation</Link>
                </li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                    <Link to="/report">Report</Link>
                </li>
                <li className="p-4 hover:bg-gray-700 cursor-pointer">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
