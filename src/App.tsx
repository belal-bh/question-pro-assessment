import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/Layout';
import AppRoutes from './Routes';
import { UserProvider } from './contexts/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <UserProvider>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <AppRoutes />
            </Suspense>
          </Layout>
        </UserProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App; 