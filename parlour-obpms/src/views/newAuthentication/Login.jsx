import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AlertTitle from "@mui/material/AlertTitle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import axios from "../../axios";
// import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

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

const SignIn = ({ token }) => {
  const navigate = useHistory();

  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      setIsLoading(true);
      const userData = await axios.post("/api/parlours/login", {
        email: data.get("email"),
        password: data.get("password"),
      });
      setIsLoading(false);
      token(userData.data.data);
      navigate.push("/dashboard");
    } catch (error) {
      // // console.log(error.response.data);
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {error ? (
              <Alert variant="filled" severity="error">
                <AlertTitle>Error</AlertTitle>
                {error.message}
              </Alert>
            ) : (
              false
            )}
            <Box sx={{pt: 3}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="btn-login"
              >
                {isLoading ? (
                  <Box sx={{ display: "flex" }}>
                    <CircularProgress size="1.5rem" color="inherit" />
                  </Box>
                ) : (
                  "Sign In"
                )}
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "LOGIN", payload: data }),
});

export default connect(null, mapDispatchtoProps)(SignIn);
