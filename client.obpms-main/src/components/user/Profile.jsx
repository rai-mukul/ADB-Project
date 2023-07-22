import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import AccountP from './AccountProfile'
import AccountDetails from './AccountDetails'


export default function Profile() {
  return (
    <div> <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth="lg">
      <Typography
        sx={{ mb: 3 }}
        variant="h4"
      >
        Account
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <AccountP />
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xs={12}
        >
          <AccountDetails />
        </Grid>
      </Grid>
    </Container>
  </Box>
  </div>
  )
}
