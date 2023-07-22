import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const pages = [
  { id: 0, name: "Home", url: "/" },
  { id: 1, name: "About", url: "/about" },
  { id: 2, name: "Login", url: "/login" },
  { id: 3, name: "Register", url: "/register" },
  { id: 4, name: "Profile", url: "/user" },
  { id: 5, name: "Services", url: "/product" },
];
const HeaderFile = ({ user, token }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

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

  // console.log('fasdfds',user)

  const p = pages.filter((page) => {
    if(user?.user?.active === true){
      //  // console.log(page.id === 0 )
      return page.id === 0 || page.id === 1 || page.id === 4 || page.id === 5;
    } else{
      return page.id === 0 || page.id === 1 || page.id === 2 || page.id === 3 || page.id === 5
    }
    
  }) 

  // // console.log(user.message);

  const logout = () => {
    token();
    navigate("/");
    // window.location.reload();
  };

  return (
    <AppBar position="static" className="navBackground">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Glitter-Girls
          </Typography>
          {/* <img src='/assets/Artboard 1logo.svg' className='logo'></img> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {p.map((navData, i) => {
                return (
                  <MenuItem key={i + 1} onClick={handleCloseNavMenu}>
                    <Link to={navData.url} className="textD">
                      <Typography textAlign="center">{navData.name}</Typography>
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Glitter-Girls
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {p.map((navData, i) => (
              <Link to={navData.url} key={i + 1} className="textD">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {navData.name}
                </Button>
              </Link>
            ))}
          </Box>
          {user.user  ?  (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/user" className="textD">
                    <ListItemIcon>
                      <ManageAccountsIcon fontSize="small" />
                    </ListItemIcon>
                    Account
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/booking" className="textD">
                    <ListItemIcon>
                      <BeenhereIcon fontSize="small" />
                    </ListItemIcon>
                    Bookings
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={
                    () => logout()
                  }
                  className="textD"
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ):false} 
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStatetoProps = (state) => ({
  user: state.data,
});

const mapDispatchtoProps = (dispatch) => ({
  token: () => dispatch({ type: "LOGOUT"}),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(HeaderFile);
