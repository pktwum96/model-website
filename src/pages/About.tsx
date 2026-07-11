import { Box, Container, Divider, Link, Typography } from "@mui/material";
import { siteContent } from "../content/site";

function About() {
  const { name, role, location, specialties, instagram, instagramHandle, bio } =
    siteContent;

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          {role}
        </Typography>

        <Box sx={{ maxWidth: 680, mx: "auto" }}>
          <Typography variant="body1" paragraph>
            {bio.paragraph1}
          </Typography>
          <Typography variant="body1" paragraph>
            {bio.paragraph2}
          </Typography>
          <Typography variant="body1" paragraph>
            {bio.paragraph3}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "1.25rem",
              color: "text.secondary",
              my: 4,
              textAlign: "center",
            }}
          >
            &ldquo;{bio.pullQuote}&rdquo;
          </Typography>
        </Box>

        <Divider sx={{ my: 6, maxWidth: 680, mx: "auto" }} />

        <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
          {location} · {specialties}
        </Typography>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            Bookings &amp; Inquiries
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: { xs: 1, sm: 3 },
              mt: 2,
            }}
          >
            <Link
              href={`https://www.facebook.com/benjamin.tetteh.9440`}
              underline="hover"
              color="text.primary"
              sx={{ letterSpacing: "0.04em" }}
            >
              Facebook
            </Link>
            <Typography
              component="span"
              color="text.secondary"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              ·
            </Typography>
            <Link
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="text.primary"
              sx={{ letterSpacing: "0.04em" }}
            >
              {instagramHandle}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
