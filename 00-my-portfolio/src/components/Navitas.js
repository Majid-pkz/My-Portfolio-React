import * as React from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu,  Container, Button, MenuItem  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Creating an array of strings to represent the different components 

const pages = ['About Me', 'Portfolio', 'Contact','Resume'];


function ResponsiveAppBar({setCurrentPage}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

//Defining a function to handle opening the navigation menu on small screen
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className='row flex' >
        
          <Typography
            variant="h5"
            noWrap         
           
            sx={{
              mr: 50,
              mx:0,
              display: { xs: 'flex', sm: 'flex', md: 'flex',  lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Majid Pourkazemi
          </Typography>

          {/* Navigation menu icon for small screens */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >   
             <MenuIcon />          
            </IconButton>

              {/* Navigation menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },

              }}
            >
               {/* Map through the pages array to create menu items when screen is small */}
              {pages.map((page) => (
                <MenuItem key={page}  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={()=>{  setCurrentPage(page) }} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
        {/* Navigation buttons for larger screens  using map through pages array*/}
          <Box sx={{ flexGrow: 1, mx:25, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page} 
                onClick={(event)=>{ handleCloseNavMenu(event); setCurrentPage(page) }}              
                sx={{ my: 5, mx:6, color: 'white', display: 'block' }}              >
                {page}
              </Button>
            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;