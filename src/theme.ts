import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFAF8",
      paper: "#FAFAF8",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#6B6B6B",
    },
    divider: "#E8E8E4",
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: "0.04em",
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: "0.06em",
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontWeight: 400,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.6,
      color: "#6B6B6B",
    },
    subtitle1: {
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: "0.75rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "#6B6B6B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontSize: "0.75rem",
          fontWeight: 400,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#FAFAF8",
        },
      },
    },
  },
});

export default theme;
