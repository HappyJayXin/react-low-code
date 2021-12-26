import Typography from '@mui/material/Typography';
import DocumentLayout from 'common/Layout/Document';
import Divider from '@mui/material/Divider';
import Basic from 'features/Layout/Basic';

const LayoutPage = () => {
  return (
    <DocumentLayout>
      <Typography variant="h1" gutterBottom>
        Layout
      </Typography>
      <Typography variant="body1" gutterBottom>
        網站內容排版
      </Typography>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Basic />
    </DocumentLayout>
  );
};

export default LayoutPage;
