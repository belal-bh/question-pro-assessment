import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './Routes';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App; 