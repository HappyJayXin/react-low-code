import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';

export default function ButtonAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <CodeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
