import tools from './data';
import ToolsDrawer from './ToolsDrawer';
import PlaygroundDrawer from './PlaygroundDrawer';
import Playground from 'features/Playground';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Document = ({ children }: Props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
      </AppBar>

      <ToolsDrawer drawerWidth={drawerWidth}>
        <List>
          {tools.map((tool) => (
            <ListItem key={tool.name} disablePadding>
              <ListItemButton component="a" href={tool.href}>
                <ListItemIcon>
                  <tool.icon />
                </ListItemIcon>
                <ListItemText primary={tool.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </ToolsDrawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>

      <PlaygroundDrawer drawerWidth={drawerWidth}>
        <Playground />
      </PlaygroundDrawer>
    </Box>
  );
};

export default Document;
