import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import  AccountDetails  from "./AccountDetails";

export default function Profile() {
  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3, textAlign:'center',pt:2,pb:2 }} variant="h4">
            My Account
          </Typography>
          <Grid container spacing={3}>
              <AccountDetails />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
