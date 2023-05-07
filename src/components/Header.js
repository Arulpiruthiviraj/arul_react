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
import { Link } from 'react-scroll';

const HeaderBar = styled(AppBar)({
  background: '#333333',
  color: '#ffffff',
});

const Header = ({ children }) => {
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
          <MenuItem onClick={handleClose}>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="experience" smooth={true} duration={500}>Experience</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </MenuItem>
        </Menu>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {children}
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;
