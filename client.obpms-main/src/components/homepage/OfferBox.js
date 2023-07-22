import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import "./Custom.css";

function OfferBox() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: "flex", pb:5 }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#ffc071",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h3" component="h3" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                placeholder="Your email"
                sx={{ width: "100%", mt: 3, mb: 2, bgcolor: "#ffffff" }}
              />
              <Button
                type="submit"
                color="error"
                variant="contained"
                sx={{ width: "100%", p: 2 }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background:
                "url(https://mui.com/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src="https://templates.hibootstrap.com/wofy/default/assets/images/gallery/g7.jpg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "90%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar open={open} closeFunc={handleClose}>
        <Alert severity="success">
          We will send you our best offers, once a week.!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default OfferBox;
