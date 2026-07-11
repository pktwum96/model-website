import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { siteContent } from "../content/site";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
];

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

  const goTo = (path: string) => {
    navigate(path);
    handleMobileMenuClose();
  };

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
      {navLinks.map(({ path, label }) => (
        <MenuItem key={path} onClick={() => goTo(path)}>
          {label}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, py: 2 }}>
      <Container maxWidth="lg">
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "inherit", color: "inherit" }}
        >
          <Toolbar
            disableGutters
            sx={{ minHeight: "unset!important", justifyContent: "space-between" }}
          >
            <Typography
              component="button"
              onClick={() => goTo("/")}
              sx={{
                display: { xs: "none", md: "block" },
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                p: 0,
              }}
            >
              {siteContent.name}
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleMobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              <MenuIcon />
            </IconButton>

            <Stack
              direction="row"
              sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}
            >
              {navLinks.map(({ path, label }) => (
                <Button key={path} onClick={() => goTo(path)} color="inherit">
                  {label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
      {renderMobileMenu}
    </Box>
  );
}

export default NavBar;
