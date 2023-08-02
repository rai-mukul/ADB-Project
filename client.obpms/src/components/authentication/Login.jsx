import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import { connect } from "react-redux";
import axios from "../../axios";
//// import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = ({ token }) => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      email: "sample@email.com",
      password: "Password123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
  });

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const email = formik.values.email;
      const password = formik.values.password;
      setIsLoading(true)
      const data = await axios.post("/api/users/login", { email, password });
      token(data.data.data);
      navigate("/user");
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error.response.data);
      // console.log(error.message);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box
            component="main"
            sx={{
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              minHeight: "100%",
            }}
          >
            <Container maxWidth="sm">
              <Card sx={{ p: 4 }}>
                <form onSubmit={(e) => onSubmit(e)}>
                  <Box sx={{ my: 2 }}>
                    <Typography color="textPrimary" variant="h4">
                      Sign in
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    >
                      Sign in on the internal platform
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    variant="outlined"
                  />

                  {error ? (
                    <Alert variant="filled" severity="error">
                      <AlertTitle>Error</AlertTitle>
                      {error.message}
                    </Alert>
                  ) : (
                    false
                  )}

                  <Box sx={{ py: 2 }}>
                    <Button
                      className="buttonC"
                      disabled={formik.isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign In Now
                      {
                        isLoading &&
                      <Stack
                        sx={{ color: "grey.500", pl:2 }}
                      >
                        <CircularProgress color="warning" />
                      </Stack>
                      }
                    </Button>
                  </Box>
                </form>
                <Grid container>
                  <Grid item xs>
                    <Typography color="textSecondary" variant="body2">
                      Don&apos;t have an account?{" "}
                      <Link
                        to="/register"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        Sign Up
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography color="textSecondary" variant="body2">
                      Don't remember?
                      <Link
                        to="/forgot-password"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        Forgot Password
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "LOGIN", payload: data }),
});

export default connect(null, mapDispatchtoProps)(Login);
