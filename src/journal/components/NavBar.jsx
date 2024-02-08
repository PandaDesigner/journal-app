import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = ({ drawrWidth }) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        width: { sm: `calc(100% - ${drawrWidth}px)` },
        ml: { sm: `${drawrWidth}px` }
      }}
    >
      <Toolbar
        color="inherit"
        edge="start"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end'
        }}
      >
        <IconButton
          edge="start"
          sx={{
            mr: 2,
            display: { sm: 'none' }
          }}
          color="#fff"
        >
          <MenuOutlined sx={{ fill: '#fff' }} />
        </IconButton>
        <Grid
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h6" noWrap component={'div'} color="#fff">
            {' '}
            JournalApp{' '}
          </Typography>
          <IconButton color="secondary">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
