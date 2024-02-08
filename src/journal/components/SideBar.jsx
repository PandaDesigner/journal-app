import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';

export const SideBar = ({ drawerWidth = 340 }) => {
  return (
    <Box
      component={'nav'}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        color: '#fff'
      }}
    >
      <Drawer
        variant="persistent" // temporary
        open={true}
        sx={{
          display: { xs: 'block' },

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:
              'linear-gradient(-174.87deg, rgba(112, 151, 217, 1) -36.71897846239968%, rgba(30, 34, 170, 1) 103.47570081720376%)'
          }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={'div'} color="#fff">
            Pedro Fernandez
          </Typography>
        </Toolbar>
        <Divider fullWidth />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map((text) => {
            return (
              <ListItemButton
                key={text}
                disablePadding
                sx={{
                  transition: 'all',
                  transitionDuration: '1.0s',
                  '&:hover': {
                    backgroundColor: '#1E22AA'
                  }
                }}
              >
                <ListItemIcon>
                  <TurnedInNot sx={{ fill: '#fff' }} />
                </ListItemIcon>
                <Grid container sx={{ color: '#fff' }}>
                  <ListItemText
                    fontSize="2.5rem"
                    sx={{
                      color: '#FFF',
                      fontWeight: 'bold',
                      ':hover': {
                        color: 'secondary.main'
                      }
                    }}
                    primary={text}
                  />
                  <ListItemText
                    sx={{
                      '& .MuiTypography-root': {
                        color: '#fff'
                      }
                    }}
                    secondary={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    }
                  />
                </Grid>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
};
