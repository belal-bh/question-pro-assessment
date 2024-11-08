import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { User } from '@/types';

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<User>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Belal Hossain',
      email: 'belal.cseai@gmail.com',
      avatar: null,
      preferences: {
        theme: theme,
        language: 'en',
      }
    };
  });

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => {
      const newUser = { ...prev, ...updates };
      
      // If theme preference is updated, toggle theme
      if (updates.preferences?.theme && updates.preferences.theme !== prev.preferences?.theme) {
        toggleTheme();
      }
      
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 