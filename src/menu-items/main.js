// assets
import { FileDoneOutlined} from '@ant-design/icons';

// icons
const icons = {
  FileDoneOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const invoice = {
  id: 'group-dashboard',
  title: 'Main',
  type: 'group',
  children: [
    {
      id: 'main',
      title: 'Dashboard',
      type: 'item',
      url: '/main/dashboard',
      icon: icons.FileDoneOutlined,
      breadcrumbs: false
    }
   
    
  ]
};

export default invoice;
