import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from 'react';
export const Navbar = () => {
  const [anchorE1, setanchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const handleClick = (event) => {
    setanchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setanchorE1(null);
  };
  return (
    <AppBar position='static'>
      <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
            <TextSnippetIcon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{mr:3}}>
            ToDo
          </Typography>
          <Stack direction='row' spacing={2} >
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Features</Button>
            <Button 
            color='inherit' 
            id='resources-button' 
            onClick={handleClick} 
            aria-controls={open ?'resources-menu':undefined}
            aria-haspopup={'true'}
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon/>}
            >
              Types
            </Button>
            <Button color='inherit'>Login</Button>
          </Stack>
          <Menu 
          id='resources-menu' 
          anchorEl={anchorE1} 
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',

          }}
          onClose = {{handleClose}}
          anchorOrigin = {{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin = {{
            vertical: 'top',
            horizontal: 'right',
          }}
          >
            <MenuItem onClick={handleClose}>School Routine</MenuItem>
            <MenuItem onClick={handleClose}>groceries</MenuItem>
            <MenuItem onClick={handleClose}>skincare</MenuItem>
          </Menu>
      </Toolbar>
    </AppBar>
  )
}
