import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "../../axios";
// import axios from 'axios';
import StateName from "./State";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        OBPMS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const SignUp = ({ token, logout }) => {

  const navigate = useHistory();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [roadName, setRoadName] = React.useState("");
  const [localityName, setlocalityName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [statName, setStatName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pinCode, setPinCode] = React.useState("");
  const [country] = React.useState("USA");
  const [phone, setPhone] = React.useState(Number);
  const [isLoading, setIsLoading] = React.useState(false);

  
console.log(pinCode);

  const handleSubmit = async (event) => {
    let mobile =
      phone.length === 10
        ? phone * 1
        : alert("Mobile Number should be of 10 digit");

    event.preventDefault();
    try {
      setIsLoading(true)
      const data = await axios.post("/api/parlours/signup", {
        name: firstName + " " + lastName,
        email,
        phone: mobile,
        password,
        passwordConfirm: password,
        roadName,
        localityName,
        cityName,
        statName,
        pinCode,
      });
      token(data.data.data);
      setIsLoading(false)
      navigate.push("/verify");
     
    } catch (error) {
      setIsLoading(false)
      // console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#e52e71" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Parlour First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Parlour Last Name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              {/* Address data start  */}
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-road"
                  name="roadName"
                  required
                  fullWidth
                  id="roadName"
                  label="Road Name"
                  onChange={(e) => setRoadName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="localityName"
                  label="Locality"
                  name="localityName"
                  onChange={(e) => setlocalityName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-city"
                  name="cityName"
                  required
                  fullWidth
                  id="cityName"
                  label="City"
                  onChange={(e) => setCityName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={statName}
                    label="State"
                    onChange={(e) => setStatName(e.target.value)}
                  >
                    {StateName.map((sData, i) => (
                      <MenuItem key={i + 1} value={sData}>
                        {sData}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-city"
                  name="countryName"
                  required
                  fullWidth
                  id="countryName"
                  label="Country"
                  value={country}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="pinCode"
                  label="ZIP Code"
                  name="pinCode"
                  onChange={(e) => setPinCode(e.target.value)}
                  autoComplete="pin-code"
                />
              </Grid>
              {/* Address data end  */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Mobile Number"
                  autoComplete="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className="btn-login"
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#e52e71" }}
            >
              {
                isLoading ?
                <Stack sx={{ color: "grey.500", pl: 2 }}>
                        <CircularProgress size="1.5rem" color="warning" />
                      </Stack>
                :
              'Sign Up'
              }
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "REGISTER_USER", payload: data }),
  // logout: () => dispatch({ type: "LOGOUT" }),
});

export default connect(null, mapDispatchtoProps)(SignUp);
