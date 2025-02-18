import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Divider } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { routes } from "../models/routes";



const ResponsiveNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Navbar principale */}
      <AppBar position="static" sx={{ backgroundColor: "#fffefc" }}>
        <Toolbar>
          {/* Logo ou titre */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1,fontFamily:"Cambria", fontWeight: "bold", letterSpacing: 1,color:"var(--primary-color)" }}
          >
            
            Payment
          </Typography>

          {/* Bouton pour ouvrir le menu en version mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              sx={{color:"var(--primary-color)"}}
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menu en grand écran */}
          <Box sx={{ display: { xs: "none", md: "flex" }, fontFamily:"Cambria",alignItems: "center", gap: 2 }}>

            
            {routes.map((item,index) => (
              <Link key={index} to={`/${item.path}`.toLowerCase()} >
                <Button key={index} 
                
                sx={{
                  color: "var(--primary-color)",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "var(--primary-color)",
                    transition: "width 0.3s ease-in-out",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&:hover": {
                    backgroundColor: "transparent",
                    color:"var(--primary-color)"
                  }

                }}
                >
                  {item.path}
                </Button>
                
            </Link>
            ))}
            <MenuButton></MenuButton>
          </Box>
          
        </Toolbar>
      </AppBar>

      {/* Drawer (Menu latéral pour mobile) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": { width: 250,  },
        }}
      >
        <Typography
            variant="h6"
            sx={{ padding: 2,textAlign: "center",
              fontFamily:"Cambria", fontWeight: "bold", letterSpacing: 1,color:"var(--primary-color)" }}
          >
            
            Payment
            
          </Typography>
              <Divider/>
        <List>
          {routes.map((item ,index) => (
            <>
            <Link to={`/${item}`.toLowerCase()} >
              <ListItem key={index} disablePadding >
                
                <ListItemButton onClick={handleDrawerToggle} >
                  
                    <ListItemText
                      primary={item.path}
                      sx={{  textAlign: "center" ,color:"var(--text-primary)"  }}
                    />
                  
                </ListItemButton>
                
              </ListItem>
            </Link>
            <Divider/>
            </>
          ))}
        </List>

      </Drawer>
      
    </>
  );
};

export default ResponsiveNavbar;





import { Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SignInModal from "./Users/SignIn";

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Bouton qui ouvre le menu */}
      <IconButton onClick={handleClick} sx={{ color: "var(--primary-color)" }}>
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      {/* Menu déroulant */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        
          <SignInModal />
        
        <MenuItem onClick={handleClose } sx={{ color: "var(--primary-color)" }}>
          <LogoutIcon sx={{ marginRight: 1 }} />
          Sign Out
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "var(--primary-color)" }}>
          <AccountCircleIcon  sx={{ marginRight: 1, }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "var(--primary-color)" }}>
          <ExitToAppIcon sx={{ marginRight: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};


