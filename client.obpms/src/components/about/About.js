import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const Img = styled("img")({
  margin: "auto",
  display: "flex",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <div>
      <Divider style={{ paddingTop: 10, paddingButtom: 10 }}>
        <Chip color="warning" avatar={<Avatar>A</Avatar>} label="About Us" />
      </Divider>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1000,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              margin: "auto",
            }}
          >
            <ButtonBase sx={{ width: 300, height: 333 }}>
              <Img alt="complex" src="/about.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item container direction="column">
              <Typography
                gutterBottom
                variant="subtitle1"
                color="text.secondary"
              >
                We believe that beauty is not just skin deep; it is an
                expression of your inner radiance and confidence. We are
                passionate about helping you look and feel your best, which is
                why we have created a haven of beauty and relaxation, where you
                can indulge in a wide range of services designed to pamper and
                rejuvenate.
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.secondary"
              >
                Our Story: <br/>Established in 2023, OBPMS has been serving
                the Overland Park community with exceptional beauty services and
                treatments. From the beginning, our mission has been to bring
                out the natural beauty in everyone who walks through our doors.
                Our team of skilled and experienced beauty professionals are
                dedicated to delivering personalized services, tailored to meet
                the unique needs of each individual.
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.secondary"
              >
                When my magic brushes and color touch you look at what you would
                have imagined to look like and even much better.We are highly
                skilled and dedicated makeup artist with an outstanding record
                of client satisfaction and customer service.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
