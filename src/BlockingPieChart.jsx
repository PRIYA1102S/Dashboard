import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
    labels: ['Blocked', 'Unblocked', 'Pending'],
    datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverOffset: 4
        }
    ]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: (context) => {
                    const label = context.label || '';
                    const value = context.raw;
                    return `${label}: ${value} units`;
                }
            }
        }
    }
};

const BlockingPieChart = () => {
    return (
        <div className="bg-gray-800 text-white p-5 shadow-lg rounded-lg flex flex-col justify-between h-full">
            <h2 className="text-xl text-center font-bold mb-4">Blocking Pie Chart</h2>
            <div className="flex-grow">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default BlockingPieChart;