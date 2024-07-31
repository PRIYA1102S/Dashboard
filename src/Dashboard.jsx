import React from 'react';
import SystemProcesses from './SystemProcesses';
import HealthCharts from './HealthCharts';
import ThreatNotifications from './ThreatNotifications';
import BlockingPieChart from './BlockingPieChart';
import LiveActivityFeed from './LiveActivityFeed';

const Dashboard = () => {
    return (
        <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center">
            <div className="w-full max-w-screen-lg p-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div id="system-processes" className="col-span-1 lg:col-span-2">
                        <SystemProcesses />
                    </div>
                    <div id="health-charts" className="col-span-1">
                        <HealthCharts />
                    </div>
                    <div id="threat-notifications" className="col-span-1">
                        <ThreatNotifications />
                    </div>
                    <div id="live-activity-feed" className="col-span-1">
                        <LiveActivityFeed />
                    </div>
                    <div id="blocking-pie-chart" className="col-span-1">
                        <BlockingPieChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
