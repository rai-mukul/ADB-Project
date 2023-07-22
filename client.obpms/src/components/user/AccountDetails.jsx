import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import "./Profile.css";
import { connect } from "react-redux";

const AccountDetails = (props) => {
  const [values] = useState({
    firstName: props.user.user.name.split(" ")[0] || "Fname",
    lastName: props.user.user.name.split(" ")[1] || "Lname",
    email: props.user.user.email,
    mobile: props.user.user.phone
  });

  // // console.log(props.user.user);
  return (
    <div>
    <Card>
      <CardHeader
        subheader="The information can't be edited currently."
        title="Profile"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              helperText="Please specify the first name"
              label="First name"
              name="firstName"
              value={values.firstName}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              value={values.lastName}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={values.email}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobile"
              value={values.mobile}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      ></Box>
    </Card>
    </div>
  );
};
 
const mapStatetoProps = (state) => ({
  user: state.data,
});

export default connect(mapStatetoProps, null)(AccountDetails);
