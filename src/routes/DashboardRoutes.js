import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';


// const CostedYY = Loadable(lazy(() => import('pages/coatsrequest')));
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));



// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: '/dashboard',
  element: <MainLayout />,
  children: [
    {
      path: 'default',
      element: <Dashboard />
    },
    
  ]
};

export default DashboardRoutes;