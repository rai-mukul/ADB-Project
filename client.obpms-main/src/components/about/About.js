import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

const Img = styled("img")({
  margin: "auto",
  display: "flex",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <div>
       <Divider style={{paddingTop:10,paddingButtom:10 }}>
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
        <Grid item sx={{
            margin: 'auto'
          }}>
          <ButtonBase sx={{ width: 300, height: 333 }}>
            <Img alt="complex" src="/about.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item container direction="column">
            <Typography gutterBottom variant="subtitle1" color="text.secondary">
              The Glitter-Girls. Based in Jaipur, We have been working since
              2012 & have dolled-up more than 7 brides.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
              My goal is to make sure that all my brides have a pleasant
              experience and a smile on their faces from our very first
              conversation to the D day where she walks out looking like a
              million bucks and making heads turn everywhere she goes.
            </Typography>
            <Typography variant="subtitle1" gutterBottom color="text.secondary">
              When my magic brushes and color touch you look at what you would
              have imagined to look like and even much better.We are highly
              skilled and dedicated makeup artist with an outstanding record of
              client satisfaction and customer service.
            </Typography>
            <Typography variant="h6" gutterBottom color="text.primary" mt={2}>
              Srishti
            </Typography>
            <Typography variant="p" gutterBottom >
              <i color="warning">Salon Owner</i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
  );
}
