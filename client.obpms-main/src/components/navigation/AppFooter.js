import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <React.Fragment>
      Copyright {"© "}
      <Link color="inherit" to="/" className="textD">
      Glitter-Girls
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "#fff5f8" }}>
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5} align="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
            Glitter-Girls
            </Typography>
            <Grid container direction="column" spacing={2} sx={{ height: 120 }}>
              <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://twitter.com" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link to="/terms" className="textD">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link to="/privacy" className="textD">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Our Partners
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link to="/" className="textD">Saloon 1</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link to="/" className="textD">Saloon 2</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
