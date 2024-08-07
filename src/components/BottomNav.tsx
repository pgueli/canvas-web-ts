import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
import { FileUploadOutlined } from '@mui/icons-material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import * as React from 'react';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 500 }}>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue)
        }}
      >
        <BottomNavigationAction label="Displays" value="/admin/displays" icon={<PhotoLibrary />} />
        <BottomNavigationAction label="Upload" icon={<FileUploadOutlined />} />
        <BottomNavigationAction label="Your Library" value="/admin/library" icon={<LibraryBooksIcon />} />
      </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default BottomNav