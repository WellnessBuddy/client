import { lazy } from 'react';

// Lazy load views for better performance
const Dashboard = lazy(() => import('./views/Dashboard'));
// const Profile = lazy(() => import('./views/Profile'));
// const Activities = lazy(() => import('./views/Activities'));
// const Nutrition = lazy(() => import('./views/Nutrition'));
// const Sleep = lazy(() => import('./views/Sleep'));
// const Meditation = lazy(() => import('./views/Meditation'));
// const Goals = lazy(() => import('./views/Goals'));
// const Settings = lazy(() => import('./views/Settings'));
// const NotFound = lazy(() => import('./views/NotFound'));

const routes = [
    {
        path: '/',
        element: <Dashboard />,
        exact: true,
        useLayout: true
    },
    //   {
    //     path: '/profile',
    //     element: <Profile />,
    //   },
    //   {
    //     path: '/activities',
    //     element: <Activities />,
    //   },
    //   {
    //     path: '/nutrition',
    //     element: <Nutrition />,
    //   },
    //   {
    //     path: '/sleep',
    //     element: <Sleep />,
    //   },
    //   {
    //     path: '/meditation',
    //     element: <Meditation />,
    //   },
    //   {
    //     path: '/goals',
    //     element: <Goals />,
    //   },
    //   {
    //     path: '/settings',
    //     element: <Settings />,
    //   },
    //   {
    //     path: '*',
    //     element: <NotFound />,
    //   },
];

export default routes;