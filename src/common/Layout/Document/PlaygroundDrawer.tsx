import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import { selectPlayground } from 'features/Playground/playgroundSlice';
import { toggleIsOpen } from 'features/Playground/playgroundSlice';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

type Props = {
  children: JSX.Element[] | JSX.Element;
  drawerWidth: number;
};

const PlaygroundDrawer = ({ children, drawerWidth }: Props) => {
  const dispatch = useAppDispatch();
  const playground = useAppSelector(selectPlayground);

  const handleDrawerClose = () => {
    dispatch(toggleIsOpen(false));
  };

  return (
    <Drawer
      sx={{
        width: playground.isOpen ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={playground.isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </Drawer>
  );
};

export default PlaygroundDrawer;
