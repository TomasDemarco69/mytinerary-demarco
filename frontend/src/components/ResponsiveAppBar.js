import * as React from 'react';
import {AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Button,Tooltip,MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../images/logo.png";
import {Link as LinkRouter} from "react-router-dom"
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import userActions from '../redux/actions/userActions';
import { width } from '@mui/system';

const settings = [{to:"/signUp",name:"SignUp"}, {to:"/logIn",name:"LogIn"}];

const opcionesNavBar = [
  {to:"/Index", name:"Home"}, {to:"/cities", name:"Cities"}
]

const ResponsiveAppBar  = () =>{  
  const [anchorElNav ,setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch()

  const handleOpenNavMenu  = (event) => {
    setAnchorElNav (event.currentTarget);
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
 let user = useSelector(store=>store.userReducer.user)
 console.log(user);
  return (
    <AppBar position="static" sx={{backgroundColor:"black"}}>
      <Container maxWidth="xl">
       <Toolbar className='ContenedorNav'>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
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
                display: { xs: 'block', md: 'none'},
              }}
            >
              {opcionesNavBar.map((page) => (
                <LinkRouter key={page.name} to={page.to} onClick={handleCloseNavMenu}>
                    <MenuItem>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box> 
          <Box>
           <img className='logonav' src={Logo} alt="logo" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {opcionesNavBar.map((page) => (
              <LinkRouter key={page.name} to = {page.to} onClick={handleCloseNavMenu}>
                       <Button
                         sx={{ my: 2, color: 'white', display: 'block' }}>
                         {page.name}
                       </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {!user?
               <AccountCircleIcon />
               :
               <img className='loguitoNav' style= {{ width:"40px"}} src={user.imageUser} />
               }
             
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
              {!user?
              settings.map((setting,index) => (
                <LinkRouter key={index} to={setting.to} onClick={handleCloseUserMenu}>
               <MenuItem>
                 <Typography textAlign="center">{setting.name}</Typography>
               </MenuItem>
               </LinkRouter>
             ))
             :
             <LinkRouter to="/index" onClick={()=>{
              dispatch(userActions.logOut())
             }}>
                <MenuItem>
                  <Typography textAlign="center">LogOut</Typography>
                </MenuItem>
                </LinkRouter>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

