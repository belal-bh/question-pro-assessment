import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Components from './pages/Components';
import Profile from './pages/Profile';
import Posts from './pages/dashboard/Posts';
import Comments from './pages/dashboard/Comments';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Posts />} />
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/components" element={<Components />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes; 