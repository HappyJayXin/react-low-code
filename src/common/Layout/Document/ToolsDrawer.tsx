import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

type Props = {
  children: JSX.Element[] | JSX.Element;
  drawerWidth: number;
};

const ToolsDrawer = ({ children, drawerWidth }: Props) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      {children}
    </Drawer>
  );
};

export default ToolsDrawer;
