import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const defaultData = [
    { name: '10:00', CPU: 20, Memory: 30, Disk: 50, Network: 40 },
    { name: '10:05', CPU: 25, Memory: 35, Disk: 55, Network: 45 },
    { name: '10:10', CPU: 30, Memory: 40, Disk: 60, Network: 50 },
    { name: '10:15', CPU: 35, Memory: 45, Disk: 65, Network: 55 },
    { name: '10:20', CPU: 40, Memory: 50, Disk: 70, Network: 60 },
];

const HealthCharts = ({ data = defaultData }) => {
    return (
        <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <h2 className="text-xl text-center font-bold mb-6">System Health Monitoring</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="CPU" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Memory" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Disk" stroke="#ffc658" />
                    <Line type="monotone" dataKey="Network" stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HealthCharts;
