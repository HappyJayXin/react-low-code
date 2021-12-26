import { useAppDispatch } from 'app/hooks';
import {
  toggleIsOpen,
  setPlaygroundType,
} from 'features/Playground/playgroundSlice';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const Basic = () => {
  const dispatch = useAppDispatch();

  const onEditClick = () => {
    dispatch(toggleIsOpen(true));
    dispatch(setPlaygroundType('layout'));
  };

  return (
    <Box width={700}>
      <Typography variant="h2" gutterBottom>
        基本排版
      </Typography>
      <Box
        border={1}
        borderColor="grey.300"
        width="100%"
        height={450}
        borderRadius={1}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <IconButton color="primary" aria-label="edit" onClick={onEditClick}>
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Basic;
