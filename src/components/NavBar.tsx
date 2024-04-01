import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

function NavBar() {
  const navigate = useNavigate();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToHome = () => navigate("/");
  const goToAbout = () => navigate("/about");
  const goToGallery = () => navigate("/gallery");

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={goToHome}>Home</MenuItem>
      <MenuItem onClick={goToAbout}>About</MenuItem>
      <MenuItem onClick={goToGallery}>Gallery</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "inherit", color: "inherit" }}
      >
        <Toolbar sx={{ minHeight: "unset!important" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ margin: "auto", display: { xs: "flex", md: "none" } }}
            onClick={handleMobileMenuOpen}
            aria-controls={mobileMenuId}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            direction={"row"}
            sx={{ margin: "auto", display: { xs: "none", md: "flex" } }}
          >
            <Button onClick={goToHome} color="inherit">
              Home
            </Button>
            <Button onClick={goToAbout} color="inherit">
              About
            </Button>
            <Button onClick={goToGallery} color="inherit">
              Gallery
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default NavBar;
