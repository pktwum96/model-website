import { Box } from "@mui/material";
import ImagesRenderer from "../components/ImagesRenderer";

function Gallery() {
  return (
    <Box sx={{ maxWidth: 1400, mx: "auto" }}>
      <ImagesRenderer />
    </Box>
  );
}

export default Gallery;
