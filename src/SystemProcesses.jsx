import React, { useState, useEffect } from 'react';

const generateMockProcesses = () => [
    { name: 'Process1', pid: 1234, status: 'Running' },
    { name: 'Process2', pid: 5678, status: 'Sleeping' },
    { name: 'Process3', pid: 9101, status: 'Running' },
    { name: 'Process4', pid: 1121, status: 'Stopped' },
];

const SystemProcesses = () => {
    const [processes, setProcesses] = useState(generateMockProcesses());

    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            setProcesses(generateMockProcesses());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-800 text-white p-5 shadow rounded-lg">
            <h2 className="text-xl text-center font-bold mb-6">System Processes</h2>
            <table className="w-full table-auto bg-gray-900 text-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">PID</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {processes.map((process, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{process.name}</td>
                            <td className="border px-4 py-2">{process.pid}</td>
                            <td className="border px-4 py-2">{process.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SystemProcesses;
