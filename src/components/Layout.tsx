import { ReactNode } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white h-16 shadow-xl z-50">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Brand */}
            <div className="text-xl font-bold text-white">
              Assessment
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-800 hover:text-blue-400'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Dashboard Dropdown */}
              <div className="relative group">
                <NavLink 
                  to="/dashboard" 
                  end
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-gray-800 hover:text-blue-400'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                {/* Dropdown Content */}
                <div className="absolute hidden group-hover:block w-48 bg-gray-900 shadow-lg rounded-lg mt-1">
                  <NavLink 
                    to="/dashboard/posts" 
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-500/30 text-blue-400' 
                          : 'text-gray-400 hover:bg-gray-800 hover:text-blue-400'
                      }`
                    }
                  >
                    Posts
                  </NavLink>
                  <NavLink 
                    to="/dashboard/comments" 
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-500/30 text-blue-400' 
                          : 'text-gray-400 hover:bg-gray-800 hover:text-blue-400'
                      }`
                    }
                  >
                    Comments
                  </NavLink>
                </div>
              </div>

              <NavLink 
                to="/components" 
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-800 hover:text-blue-400'
                  }`
                }
              >
                My Components
              </NavLink>
            </div>

            {/* Profile Section */}
            <div 
              className="flex items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-800"
              onClick={() => navigate('/profile')}
            >
              <div className="text-right">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;