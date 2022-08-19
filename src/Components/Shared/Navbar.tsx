import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'Hooks/reduxHelper';
import { logout } from 'Pages/Auth/slice/AuthAction';

const pages = [
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Tasks',
    link: '/tasks',
  },
  {
    name: 'Members',
    link: '/members',
  }
];

const NavBar = () => {

  const dispatch = useAppDispatch();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const { user } = useAppSelector(state => state.auth);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    dispatch(logout())

  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            Task Management
          </Typography>

        
          
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link to={page.link} key={page.name} style={{display: 'block', textDecoration: 'none', marginRight: '10px', textTransform: 'uppercase'}}>
                <Box
                  
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Box>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
            >
              
              <MenuItem>
                <Typography textAlign="center">{user?.username}</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
