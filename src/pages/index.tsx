import type { NextPage } from 'next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Header from 'common/Header';
import Footer from 'common/Footer';
import MainTool from 'common/MainTool';

const Home: NextPage = () => {
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
        <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
          React Low Code
        </Typography>

        <Typography variant="h5" component="h2" sx={{ mb: 8 }}>
          透過畫面調整元件參數，生成 React 程式碼，縮短開發時間。
        </Typography>

        <MainTool />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
