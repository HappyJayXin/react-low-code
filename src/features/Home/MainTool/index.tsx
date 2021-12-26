import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import data from './data';

const MainTool = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {data.map((item, index) => (
        <Grid item key={index}>
          <Button href={item.href} variant="contained">
            {item.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainTool;
