import { useRoutes } from 'react-router-dom';
// import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
// import DashboardRoutes from './DashboardRoutes';
import MainRoutes from './MainRoutes';

export default function ThemeRoutes() {
  return useRoutes([LoginRoutes, MainRoutes]);
}
