import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const HeaderBar = styled(AppBar)({
  background: '#333333',
  color: '#ffffff',
});

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
          <MenuItem onClick={handleClose}>Skills</MenuItem>
        </Menu>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;
