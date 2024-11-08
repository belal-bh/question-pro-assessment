import { createContext, useContext, ReactNode, useState } from 'react';

interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
}

interface User {
  name: string;
  email: string;
  avatar: string | null;
  preferences: UserPreferences;
}

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null,
    preferences: {
      theme: 'light',
      language: 'en',
    }
  });

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => {
      const newUser = { ...prev, ...updates };
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