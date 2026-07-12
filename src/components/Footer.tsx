import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        Built by{" "}
        <Link
          href="https://dev.kofi.studio"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
        >
          Kofi Twum-Ampofo
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
