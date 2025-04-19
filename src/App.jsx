import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.useLayout ? (
                <Layout>{route.element}</Layout>
              ) : (
                route.element
              )
            }
            exact={route.exact}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;