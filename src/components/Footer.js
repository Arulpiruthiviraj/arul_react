import React from 'react';
import { Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#212121',
  color: '#fff',
  padding: theme.spacing(2),
  marginTop: 'auto',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" align="center">
        Made with ❤️ by{' '}
        <StyledLink href="https://www.linkedin.com/in/arularunthavaraja/" target="_blank" rel="noopener">
          Arul Arunthavaraja
        </StyledLink>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
