import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import data from './data';

const MainTool = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {data.map((item) => (
        <Grid item>
          <Link href={item.href}>
            <Button variant="contained">{item.name}</Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainTool;
