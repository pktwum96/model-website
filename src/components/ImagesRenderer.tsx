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

export type PortfolioImage = {
  img: string;
  title: string;
  alt: string;
  credit?: string;
  quilted?: { cols: number; rows: number };
};

export const portfolioImages: PortfolioImage[] = [
  {
    img: BenBanner,
    title: "Campaign Portrait",
    alt: "Benjamin Tetteh in a campaign portrait with direct gaze",
    quilted: { cols: 4, rows: 1 },
  },
  {
    img: MainFace,
    title: "Studio Headshot",
    alt: "Close-up studio headshot of Benjamin Tetteh",
  },
  {
    img: YellowLocs,
    title: "Yellow Locs",
    alt: "Close-up portrait of Benjamin Tetteh with yellow locs",
  },
  {
    img: Editorial,
    title: "Editorial Portrait",
    alt: "Benjamin Tetteh in an editorial portrait with natural light",
  },

  {
    img: AfricanPrint,
    title: "African Print",
    alt: "Benjamin Tetteh styled in African print fashion",
  },
  {
    img: HomeImage,
    title: "Editorial Feature",
    alt: "Benjamin Tetteh in an editorial feature portrait",
  },
  {
    img: RockLean,
    title: "Rock Lean",
    alt: "Benjamin Tetteh leaning against a rock in a fashion pose",
  },
];

function ImagesRenderer({
  seeMore,
  itemsToDisplay,
  type = "masonry",
}: {
  seeMore?: boolean;
  itemsToDisplay?: number;
  type?: "masonry" | "quilted";
}) {
  const images = itemsToDisplay
    ? portfolioImages.slice(0, itemsToDisplay)
    : portfolioImages;

  if (type === "quilted") {
    return (
      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={280}
        gap={8}
        sx={{ width: "100%", m: 0 }}
      >
        {images.map((item, index) => {
          const isLastWithOverlay = seeMore && index === images.length - 1;
          const { cols, rows } = item.quilted ?? { cols: 1, rows: 1 };

          return (
            <ImageListItem
              key={item.title}
              cols={cols}
              rows={rows}
              sx={{ overflow: "hidden" }}
            >
              {isLastWithOverlay ? (
                <Link
                  to="/gallery"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    height="100%"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ background: "rgba(0,0,0,0.75)", zIndex: 1 }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontSize: "0.75rem",
                      }}
                    >
                      See More
                    </Typography>
                  </Box>
                  <img
                    className="MuiImageListItem-img"
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                  />
                </Link>
              ) : (
                <img
                  className="MuiImageListItem-img"
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                />
              )}
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }

  return (
    <Box
      sx={{
        columnCount: { xs: 1, sm: 2, lg: 3 },
        columnGap: { xs: 2, md: 3 },
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 4 },
      }}
    >
      {images.map((item) => (
        <Box
          key={item.title}
          sx={{
            breakInside: "avoid",
            mb: { xs: 2, md: 3 },
          }}
        >
          <Box
            component="img"
            src={item.img}
            alt={item.alt}
            loading="lazy"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
          <Box sx={{ pt: 1.5 }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.8rem", letterSpacing: "0.02em" }}
            >
              {item.title}
            </Typography>
            {item.credit && (
              <Typography variant="body2" sx={{ fontSize: "0.7rem", mt: 0.25 }}>
                {item.credit}
              </Typography>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ImagesRenderer;
