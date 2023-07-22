import React from "react";
import { Container, Grid } from "@mui/material";
import TotalCustomers from "./TotalCustomer";
import TotalEarning from "./TotalEarning";
import TodayAppointments from "./TodayAppointments";
import { Box } from "@mui/system";
import "./Dashboard.css";
import MyAppointment from "../saloon/MyAppointment";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Box sx={{ pt: 5, pb: 5 }}>
          <Box sx={{ pt: 1, pb: 2 }}>
            <h3 align="center">Welcome to Dashboard</h3>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <TodayAppointments />
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <TotalEarning />
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                  <Grid container>
                    <Grid item sm={6} xs={12} md={6} lg={12}>
                      <TotalCustomers />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <MyAppointment />
        </Box>
      </Container>
    </div>
  );
}
