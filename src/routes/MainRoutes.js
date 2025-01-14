import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';


const CostedYY = Loadable(lazy(() => import('pages/coatsrequest')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/mlplatform',
  element: <MainLayout />,
  children: [
    {
      path: 'costedyy',
      element: <CostedYY />
    },
    
  ]
};

export default MainRoutes;
