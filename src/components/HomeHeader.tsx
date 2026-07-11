import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { siteContent } from "../content/site";
import Hero from "../assets/HomeImage.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
];

function HomeHeader() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box>
        <img
          src={Hero}
          style={{
            width: "100%",
            height: "100vh",
            maxHeight: "900px",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          alt="Benjamin Tetteh — editorial portrait"
          loading="eager"
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: 0,
          height: "100%",
          width: "100%",
          textAlign: "center",
          background: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          display: "flex",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: { xs: "2rem", md: "2.5rem" },
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {siteContent.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 3, md: 5 },
              mt: 2,
              a: {
                textDecoration: "none",
                color: "inherit",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.75rem",
                opacity: 0.9,
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 1,
                },
              },
            }}
          >
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeHeader;
