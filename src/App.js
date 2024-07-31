import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = lazy(() => import('./Dashboard'));
const Documentation = lazy(() => import('./Documentation'));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <div className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/report" element={<div>Report Content</div>} />
                <Route path="/settings" element={<div>Settings Content</div>} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
