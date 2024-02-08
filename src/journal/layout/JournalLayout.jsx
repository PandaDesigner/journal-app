/* eslint-disable react/prop-types */
import { Stack, Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawrWidth = 340;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/**NOTE - Navbar */}
      <NavBar drawrWidth={drawrWidth} />
      {/**NOTE - Sidebar */}
      <SideBar drawrWidth={drawrWidth} />
      {/**NOTE - main */}
      <Box
        component={'main'}
        sx={{
          flexGrow: 1,
          p: 3
        }}
      >
        {/**NOTE - Journal */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
