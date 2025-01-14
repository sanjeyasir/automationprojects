// material-ui
import { Box, useMediaQuery } from '@mui/material';
// import { GithubOutlined } from '@ant-design/icons';

// project import
// import Search from './Search';
import Profile from './Profile';
// import Notification from './Notification';
// import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  

  return (
    <>
      {/* {!matchesXs && <Search />} */}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
      <br/>
      
      <div style={{ display: 'flex', alignItems: 'right', marginInlineStart: 'auto' }}>
        {!matchesXs && <Profile />}
      </div>
     
      
    </>
  );
};

export default HeaderContent;
