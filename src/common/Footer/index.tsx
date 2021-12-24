import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Copyright from './Copyright';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
