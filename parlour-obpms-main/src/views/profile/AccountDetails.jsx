import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Avatar,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import "./Profile.css";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import { Box } from "@mui/system";
import axios from "../../axios";
import FormData from "form-data";

const AccountDetails = (props) => {
  // // console.log(props.user)
  const [photo, setPhoto] = React.useState(null);
  const [roadName, setRoadName] = React.useState("");
  const [localityName, setLocalityName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [statName, setStatName] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [name, setName] = React.useState("");

  useEffect(() => {
    setRoadName(props.user.parlour.roadName);
    setLocalityName(props.user.parlour.localityName);
    setCityName(props.user.parlour.cityName);
    setStatName(props.user.parlour.statName);
    setPinCode(props.user.parlour.pinCode);
    setName(props.user.parlour.name);
  }, [props.user.parlour]);

  const data = new FormData();
  data.append("photo", photo);
  data.append("id", props.user.parlour._id);
  data.append("roadName", roadName);
  data.append("localityName", localityName);
  data.append("cityName", cityName);
  data.append("statName", statName);
  data.append("pinCode", pinCode);
  data.append("name", name);

  console.log(props.user.parlour);

  const addproduct = async () => {
    try {
      const userData = await axios.patch("/api/parlours/user_update", data);
      // console.log(userData.data.data.parlour);
      props.token(userData.data.data.parlour);
      alert("update Successfully...");
    } catch (error) {
      // console.log(error?.response);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xs={12}>
        <Card {...props}>
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Avatar
                src={props.user.parlour.photo}
                sx={{
                  height: 64,
                  mb: 2,
                  width: 64,
                }}
              />
              <Typography color="textPrimary" gutterBottom variant="h5">
                {name}
              </Typography>
            </Box>
          </CardContent>
          <Divider />

          <Box sx={{ m: 2 }}>
            <form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </Form.Group>
              {/* <Box sx={{ml:1}}> <Button variant="outlined"  onClick={()=>addproduct()}>Update</Button></Box> */}
            </form>
          </Box>
        </Card>
      </Grid>
      <Grid item lg={8} md={6} xs={12}>
        <form autoComplete="off" noValidate {...props}>
          <Card sx={{ py: 5 }}>
            <CardHeader
              subheader="The information can be edited"
              title="Profile"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Parlour name"
                    name="firstName"
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    helperText="You cannot update"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={props.user.parlour.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobile"
                    helperText="You cannot update"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={props.user.parlour.phone}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box paddingTop={5}>
                <Typography variant="subtitle1" paddingBottom={5}>
                  Address
                </Typography>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Road Name"
                      name="road"
                      onChange={(e) => setRoadName(e.target.value)}
                      required
                      value={roadName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Locality"
                      name="locality"
                      onChange={(e) => setLocalityName(e.target.value)}
                      required
                      value={localityName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      onChange={(e) => setCityName(e.target.value)}
                      required
                      value={cityName}
                      variant="outlined"
                    ></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      onChange={(e) => setStatName(e.target.value)}
                      required
                      value={statName}
                      variant="outlined"
                    ></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      helperText="You cannot update"
                      InputProps={{
                        readOnly: true,
                      }}
                      value="India"
                      variant="outlined"
                    ></TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Pin Code"
                      name="pin"
                      onChange={(e) => setPinCode(e.target.value)}
                      required
                      value={pinCode}
                      variant="outlined"
                    ></TextField>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            <Box sx={{ ml: 5 }}>
              {" "}
              <Button variant="outlined" onClick={() => addproduct()}>
                Update
              </Button>
            </Box>
          </Card>
        </form>
      </Grid>
    </Grid>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "UPDATE", payload: data }),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(AccountDetails);
