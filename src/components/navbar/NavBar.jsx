import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//page
import AddActivity from '../Pages/auth/AddActivity'
import Login from '../Pages/auth/Login'
import EditActivity from '../Pages/auth/EditActivity'
import Profile from '../Pages/auth/Profile'
import Register from '../Pages/auth/Register'

import Logo from '../../assets/icons-app.png';

import './NavBar.css'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [auth, setAuth] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () =>{
    dispatch({
      type:'LOGOUT',
      payload: null,
    })
     navigate('/')
    
  }

  return (
    <AppBar position="static">
      <Container maxWidth="100%" className="NavBar">
        <Toolbar disableGutters >
          <img className="logo-img" src={Logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1A265A',
              textDecoration: 'none',
              fontSize: 24
            }}
          >
            AMA <span style={{ color: '#F9F9F9' }}> FIT</span>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#1A265A',
              textDecoration: 'none',
              fontSize: 24
            }}
          >
            AMA <span style={{ color: '#F9F9F9' }}> FIT</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          </Box>
          {auth && (

            <Box sx={{ flexGrow: 0 }}>
              <span>displayName</span>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile" src={Logo} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                aria-labelledby="composition-button"
              >
                <MenuItem key="home" onClick={handleCloseUserMenu} >
                  <Link to="/dashboard" className="menu-nav"><Typography textAlign="center">Home</Typography></Link>
                </MenuItem>
                <MenuItem key="profile">
                  <Link to="/profile" className="menu-nav"><Typography textAlign="center" >Profile</Typography></Link>
                </MenuItem>
                {/* <MenuItem  key ="resetPassword" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Reset password</Typography>
                </MenuItem> */}

                <MenuItem 
                key="logout" 
                onClick={logout}>
                  <Link to="/" className="menu-nav"> <Typography textAlign="center">Logout</Typography></Link>
                </MenuItem>

              </Menu>
            </Box>)}
        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;