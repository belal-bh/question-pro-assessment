/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          accent: '#3b82f6',
          text: {
            primary: '#111827',
            secondary: '#4b5563',
            accent: '#2563eb',
          },
          border: '#e5e7eb',
          hover: '#f9fafb',
        },
        // Dark mode colors
        dark: {
          primary: '#111827',
          secondary: '#1f2937',
          accent: '#3b82f6',
          text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            accent: '#60a5fa',
          },
          border: '#374151',
          hover: '#2d3748',
        }
      },
    },
  },
  plugins: [],
}

