/* eslint-disable react/prop-types */
import {Grid, Typography, Paper, Fade } from '@mui/material'

export const AuthLayout = ({children, title=''}) => {
  return (
    
    
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}>
        <Fade in={true} 
        unmountOnExit  
        mountOnEnter 
        easing={'entre'} 
        enter={true}
         style={{
          transformOrigin: '0 0 0',
          timeout: '13s'
          }
        }>
        <Paper sx={{ 
          width: { sm: 450 },
          backgroundColor: "white",  
          borderRadius: 2, 
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          }}
          elevation={24}
          >
      <Grid
        item
        className="box-shadow"
        xs={12}
        sx={{ 
          width: '100%',
          backgroundColor: "white", 
          padding: 3, 
          borderRadius: 2 
          }}>
      <Typography 
      variant="h5" 
      color="initial" 
      sx={{ 
        mb: 1, 
        fontWeight:700, 
        fontStyle:'bold',
        color: 'primary.main'
    }}>
        {title}
      </Typography>
        {children}
    </Grid>
    </Paper>
    </Fade>
    </Grid>


  )
}
