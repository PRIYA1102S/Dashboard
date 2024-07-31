import React, { useState, useEffect } from 'react';

const mockData = [
    "User John Doe logged in",
    "System update completed",
    "Threat detected: Trojan virus",
    "User Jane Smith logged out",
    "New report generated",
    // Add more mock events as needed
];

const LiveActivityFeed = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        // Simulate live updates
        const interval = setInterval(() => {
            setActivities((prevActivities) => {
                const newActivity = mockData[Math.floor(Math.random() * mockData.length)];
                return [newActivity, ...prevActivities].slice(0, 5); // Keep only the latest 5 activities
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-800 text-white p-5 shadow-lg rounded-lg flex flex-col justify-between h-full">
            <h2 className="text-xl text-center font-bold mb-4">Live Activity Feed</h2>
            <ul className="list-disc list-inside overflow-y-auto flex-grow">
                {activities.map((activity, index) => (
                    <li key={index} className="mb-2">{activity}</li>
                ))}
            </ul>
        </div>
    );
};

export default LiveActivityFeed;