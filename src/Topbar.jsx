import React, { useState } from 'react';

const Topbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logging out...');
    };

    return (
        <div className="bg-gray-800 text-white shadow p-4 flex justify-between items-center">
            <nav className="hidden md:flex space-x-4">
                <a href="#system-processes" className="text-gray-300 hover:text-white">System Processes</a>
                <a href="#health-charts" className="text-gray-300 hover:text-white">Health Monitoring</a>
                <a href="#threat-notifications" className="text-gray-300 hover:text-white">Threat Notifications</a>
                <a href="#blocking-activities" className="text-gray-300 hover:text-white">Blocking Activities</a>
                <a href="#live-activity-feed" className="text-gray-300 hover:text-white">Live Activity Feed</a>
            </nav>
            <div className="relative">
                <img
                    src="/icons8-user-16.png"
                    alt="User"
                    className="rounded-full w-10 h-10 cursor-pointer bg-white"
                    onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-700 text-white rounded shadow-lg w-48">
                        <button
                            className="w-full text-left px-4 py-2 hover:bg-gray-600"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Topbar;
