import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CopyRight = () => {
  return (
    <Typography
      variant="body2"
      textAlign="center"
      sx={{
        color: 'white',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/HappyJayXin">
        HappyJayXin
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default CopyRight;
