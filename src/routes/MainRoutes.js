import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';



const CrudImplementation = Loadable(lazy(() => import('pages/maincrud')));
const Dashboard = Loadable(lazy(() => import('pages/dashboard')));




// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/main',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'crudimplementation',
      element: <CrudImplementation />
    }, 
  ]
};

export default MainRoutes;

