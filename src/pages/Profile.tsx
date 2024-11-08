import React from 'react';
import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { debounce } from 'lodash';

function Profile() {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    language: user.preferences?.language ?? 'en',
    theme: user.preferences?.theme ?? 'light',
  });
  const [isSaving, setIsSaving] = useState(false);

  const debouncedUpdate = debounce((updates) => {
    setIsSaving(true);
    updateUser({
      ...user,
      ...updates,
      preferences: {
        ...user.preferences,
        ...(updates.preferences || {}),
      },
    });
    setTimeout(() => setIsSaving(false), 500);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      if (name === 'language' || name === 'theme') {
        debouncedUpdate({
          preferences: {
            ...user.preferences,
            [name]: value,
          },
        });
      } else {
        debouncedUpdate({ [name]: value });
      }
      
      return newData;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
              Theme
            </label>
            <select
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        <div className="text-sm italic">
          {isSaving ? (
            <span className="text-blue-500">Saving changes...</span>
          ) : (
            <span className="text-green-500">All changes saved</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile; 