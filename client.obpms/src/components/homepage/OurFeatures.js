import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function OurFeatures() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#fff5f8" }}
    >
      <Container sx={{ mt: 5, mb: 5, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/quality.svg"
                alt="suitcase"
                sx={{ height: 70 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Quality Services Ensure
              </Typography>
              <Typography variant="p">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/team.svg"
                alt="graph"
                sx={{ height: 70 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Professional Team
              </Typography>
              <Typography variant="p">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/technology.svg"
                alt="clock"
                sx={{ height: 70 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Updated Technologies
              </Typography>
              <Typography variant="p">
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurFeatures;
