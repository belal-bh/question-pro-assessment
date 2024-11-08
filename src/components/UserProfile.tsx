import { useUser } from '@/contexts/UserContext';

const UserProfile = () => {
  const { user } = useUser();

  return (
    <aside className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white border-l border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="text-center">
          <h3 className="mt-4 text-lg font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-b border-gray-200 py-6">
          <div className="text-center">
            <span className="block text-2xl font-bold text-gray-900">12</span>
            <span className="text-sm text-gray-500">Posts</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-gray-900">4.8</span>
            <span className="text-sm text-gray-500">Rating</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
            Edit Profile
          </button>
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Settings
          </button>
        </div>
      </div>
    </aside>
  );
};

export default UserProfile; 