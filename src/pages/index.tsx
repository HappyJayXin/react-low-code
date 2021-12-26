import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import MainTool from 'features/Home/MainTool';
import LandingLayout from 'common/Layout/Landing';

const Home: NextPage = () => {
  return (
    <LandingLayout>
      <Typography variant="h1" component="h1" sx={{ mb: 3 }}>
        React Low Code
      </Typography>

      <Typography variant="h5" component="h2" sx={{ mb: 8 }}>
        透過調整 JSON 參數，生成 React 程式碼，縮短開發時間。
      </Typography>

      <MainTool />
    </LandingLayout>
  );
};

export default Home;
