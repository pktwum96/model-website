import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Hero from "../assets/HomeImage.jpg";
function HomeHeader() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box>
        <img
          src={Hero}
          style={{ width: "100%", maxHeight: "100vh", objectFit: "cover" }}
          alt={"main hero"}
          loading="lazy"
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
          <Typography variant="h4" fontFamily={"Gabriela"} gutterBottom>
            BENJAMIN TETTEH
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "80%",
              margin: "auto",
              a: {
                textDecoration: "none",
                color: "inherit",
              },
            }}
          >
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/gallery"> Gallery</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeHeader;
