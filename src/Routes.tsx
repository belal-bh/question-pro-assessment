import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const Components = lazy(() => import('./pages/Components'));
const Profile = lazy(() => import('./pages/Profile'));
const Posts = lazy(() => import('./pages/dashboard/Posts'));
const Comments = lazy(() => import('./pages/dashboard/Comments'));

function AppRoutes() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="posts" replace />} />
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="/components" element={<Components />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRoutes; 