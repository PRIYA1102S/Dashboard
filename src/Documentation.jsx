import React from 'react';

const Documentation = () => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Dashboard Documentation</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-lg leading-relaxed">
                    Welcome to the Dashboard! This tool helps you monitor and manage [specific aspect of your system].
                    The dashboard provides visual representations of your data through charts and offers options for managing notifications to keep you informed.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Interpreting Charts</h2>
                <h3 className="text-xl font-medium mb-2">Pie Chart</h3>
                <p className="text-lg leading-relaxed">
                    The Pie Chart displays the distribution of [specific data]. Each segment of the pie represents a different category, and the size of each segment indicates its proportion relative to the whole.
                    Hover over a segment to see detailed information, including the exact percentage and count for each category.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Managing Notifications</h2>
                <h3 className="text-xl font-medium mb-2">Setting Up Notifications</h3>
                <p className="text-lg leading-relaxed">
                    To ensure you’re kept up-to-date, you can configure notifications based on specific criteria.
                </p>
                <ol className="list-decimal pl-5 mb-4">
                    <li className="mb-2">Navigate to the Notifications Section: Click on the 'Notifications' tab on the dashboard.</li>
                    <li className="mb-2">Create a New Notification: Click the 'Add Notification' button.</li>
                    <li className="mb-2">Set Criteria: Define the conditions under which you want to be notified (e.g., when the number of pending items exceeds a threshold).</li>
                    <li className="mb-2">Choose Notification Method: Select how you want to receive notifications (e.g., email, SMS).</li>
                    <li>Save Settings: Click 'Save' to activate your notification.</li>
                </ol>
                <h3 className="text-xl font-medium mb-2">Managing Existing Notifications</h3>
                <p className="text-lg leading-relaxed">
                    To manage your notifications:
                </p>
                <ol className="list-decimal pl-5 mb-4">
                    <li className="mb-2">Go to Notifications Section: Click on the 'Notifications' tab.</li>
                    <li className="mb-2">View Notifications: You will see a list of your active notifications.</li>
                    <li className="mb-2">Edit Notification: Click the 'Edit' button next to the notification you wish to modify.</li>
                    <li>Delete Notification: Click the 'Delete' button to remove a notification you no longer need.</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">FAQ and Troubleshooting</h2>
                <p className="text-lg leading-relaxed">
                    Common questions and troubleshooting tips.
                </p>
                <ul className="list-disc pl-5">
                    <li className="mb-2"><strong>Q: Why am I not seeing data on the charts?</strong> Ensure that your data source is correctly connected and that you have selected the appropriate date range.</li>
                    <li className="mb-2"><strong>Q: How do I reset my notification settings?</strong> Go to the 'Notifications' section and use the 'Reset' button to return to default settings.</li>
                </ul>
                <p className="text-lg leading-relaxed mt-4">
                    For further assistance, contact support at <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
                <p className="text-lg leading-relaxed">
                    If you encounter any issues or need further assistance, please reach out to our support team:
                </p>
                <ul className="list-none pl-0">
                    <li className="mb-2">Email: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></li>
                    <li className="mb-2">Phone: <span className="text-blue-600">123-456-7890</span></li>
                    <li>Live Chat: Available on our website during business hours.</li>
                </ul>
            </section>
        </div>
    );
};

export default Documentation;
