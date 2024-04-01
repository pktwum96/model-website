import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import BenBanner from "../assets/Ben-banner.jpg";
import Editorial from "../assets/Editorial.jpg";
import HomeImage from "../assets/HomeImage.jpg";
import YellowLocs from "../assets/Yellow-Locs.jpg";
import AfricanPrint from "../assets/african-print.jpg";
import MainFace from "../assets/main-face.jpg";
import RockLean from "../assets/rock-lean.jpg";

function ImagesRenderer({
  seeMore,
  itemsToDisplay,
  type = "masonry",
}: {
  seeMore?: boolean;
  itemsToDisplay?: number;
  type?: "masonry" | "quilted";
}) {
  const dataToDisplay = itemsToDisplay
    ? itemData.slice(0, itemsToDisplay)
    : itemData;

  return (
    <Box>
      <ImageList variant={type} cols={3} gap={8} sx={{ marginTop: 0 }}>
        {dataToDisplay.map((item, index) => (
          <ImageListItem key={item.img + index}>
            {seeMore && index === dataToDisplay.length - 1 ? (
              <Link to="/gallery">
                <Box
                  position={"absolute"}
                  top={0}
                  height={"100%"}
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{
                    background: "rgba(0,0,0,0.8)",
                    p: {
                      color: "white",
                      textDecoration: "none",
                    },
                  }}
                >
                  <Typography>See More</Typography>
                </Box>
                <img
                  className="MuiImageListItem-img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </Link>
            ) : (
              <img src={item.img} alt={item.title} loading="lazy" />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const baseData = [
  {
    img: BenBanner,
    title: "BenBanner",
  },
  {
    img: Editorial,
    title: "Editorial",
  },
  {
    img: AfricanPrint,
    title: "AfricanPrint",
  },
  {
    img: MainFace,
    title: "MainFace",
  },
  {
    img: RockLean,
    title: "RockLean",
  },
  {
    img: HomeImage,
    title: "HomeImage",
  },
  {
    img: YellowLocs,
    title: "YellowLocs",
  },
];
const itemData = [...baseData, ...baseData, ...baseData, ...baseData];
export default ImagesRenderer;
