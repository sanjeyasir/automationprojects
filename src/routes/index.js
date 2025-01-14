import { useRoutes } from 'react-router-dom';
// import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import DashboardRoutes from './DashboardRoutes';


export default function ThemeRoutes() {
  return useRoutes([DashboardRoutes, LoginRoutes]);
}
