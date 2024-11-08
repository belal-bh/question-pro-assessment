import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">QuestionPro Assessment</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-4">
            This is a React-based dashboard application that demonstrates various technical capabilities
            including component reusability, API integration, and modern React patterns.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Dashboard with Posts and Comments management</li>
            <li>Custom reusable Button component (MyButton)</li>
            <li>Integration with JSONPlaceholder API</li>
            <li>TypeScript implementation</li>
            <li>Responsive design using Tailwind CSS</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Frontend</h3>
              <p className="text-gray-600">React + TypeScript</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">Styling</h3>
              <p className="text-gray-600">Tailwind CSS</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800">API</h3>
              <p className="text-gray-600">JSONPlaceholder</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Structure</h2>
          <div className="space-y-4">
            <div>
              <Link 
                to="/dashboard" 
                className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <h3 className="font-medium text-blue-800">Dashboard</h3>
                <p className="text-blue-600">View and manage posts and comments</p>
              </Link>
            </div>
            <div>
              <Link 
                to="/components" 
                className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <h3 className="font-medium text-purple-800">Components</h3>
                <p className="text-purple-600">Showcase of the custom MyButton component</p>
              </Link>
            </div>
            <div>
              <Link 
                to="/profile" 
                className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <h3 className="font-medium text-green-800">Profile</h3>
                <p className="text-green-600">User profile management</p>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">API Integration</h2>
          <p className="text-gray-600 mb-2">
            The application uses the following mock API endpoint:
          </p>
          <code className="block bg-gray-50 p-3 rounded-lg text-sm">
            https://jsonplaceholder.typicode.com/
          </code>
        </section>
      </div>
    </div>
  );
};

export default Home; 