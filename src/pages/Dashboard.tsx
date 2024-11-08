import { useLocation, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname.includes('comments') ? 'comments' : 'posts';

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your posts and comments</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <Link
              to="/dashboard/posts"
              className={`flex-1 px-6 py-4 text-sm font-medium text-center border-b-2 ${
                currentPath === 'posts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Posts
            </Link>
            <Link
              to="/dashboard/comments"
              className={`flex-1 px-6 py-4 text-sm font-medium text-center border-b-2 ${
                currentPath === 'comments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Comments
            </Link>
          </nav>
        </div>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;