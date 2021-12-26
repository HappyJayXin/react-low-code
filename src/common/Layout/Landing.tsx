import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from 'common/Header';
import Footer from 'common/Footer';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2, textAlign: 'center' }}
        maxWidth="md"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
