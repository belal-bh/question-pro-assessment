export interface User {
  id?: string;
  name?: string;
  email?: string;
  preferences?: {
    theme: 'light' | 'dark';
    language: string;
  };
}

export interface Component {
  id: number;
  name: string;
  type?: string;
  framework?: string;
  description?: string;
} 