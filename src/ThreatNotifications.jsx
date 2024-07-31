import React, { useState } from 'react';

const notifications = [
    { id: 1, type: 'alert', message: 'Suspicious activity detected on server 1!' },
    { id: 2, type: 'warning', message: 'Potential breach detected in network traffic.' },
    { id: 3, type: 'error', message: 'Failed login attempts exceeded on user account.' },
    { id: 4, type: 'alert', message: 'Suspicious activity detected on server!' },
    { id: 5, type: 'warning', message: 'Potential breach detected in network traffic.' },
];

const ThreatNotifications = () => {
    const [visibleNotifications, setVisibleNotifications] = useState(notifications);

    const handleDismiss = (id) => {
        setVisibleNotifications(visibleNotifications.filter(notification => notification.id !== id));
    };

    return (
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-5 text-center">Threat Notifications</h2>
            {visibleNotifications.length === 0 ? (
                <p>No notifications at this time.</p>
            ) : (
                <ul className="space-y-4">
                    {visibleNotifications.map(notification => (
                        <li
                            key={notification.id}
                            className={`flex justify-between items-center p-2 rounded ${notification.type === 'alert' ? 'bg-yellow-500' :
                                notification.type === 'warning' ? 'bg-orange-500' :
                                    'bg-red-500'
                                }`}
                        >
                            <span>{notification.message}</span>
                            <button
                                className="bg-gray-900 p-1 rounded hover:bg-gray-700"
                                onClick={() => handleDismiss(notification.id)}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ThreatNotifications;
