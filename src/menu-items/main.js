// assets
import { FileDoneOutlined} from '@ant-design/icons';

// icons
const icons = {
  FileDoneOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
const main = {
  id: 'group-crudimplementation',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/main/dashboard',
      icon: icons.FileDoneOutlined,
      breadcrumbs: false
    },
    {
      id: 'main',
      title: 'CrudImplementation',
      type: 'item',
      url: '/main/crudimplementation',
      icon: icons.FileDoneOutlined,
      breadcrumbs: false
    }
   
    
  ]
};

export default main;
