// project import
import Routes_dets from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';




// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //


const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes_dets/>
      </ScrollTop>
  </ThemeCustomization>
);

export default App;
