import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
// import axios from 'axios';
import { connect } from "react-redux";

const Register = ({ token }) => {
  const navigate = useNavigate();

  const [spinner, setSpinner] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      password: "",
      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      phone: Yup.string()
        .max(10)
        .min(10)
        .phone("IN", true, "Invalid phone number")
        .required("Phone number is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
  });

  //  // console.log(formik.values.phone);
  const onSubmit = async (e) => {
    setSpinner(true);
    setError("");
    e.preventDefault();
    if (
      formik.values.email &&
      formik.values.phone &&
      formik.values.password &&
      formik.values.password &&
      formik.values.firstName &&
      formik.values.lastName
    ) {
      try {
        const name = formik.values.firstName + " " + formik.values.lastName;
        const email = formik.values.email;
        const phone = formik.values.phone;
        const password = formik.values.password;
        const passwordConfirm = formik.values.password;
        setSpinner(true);
        const data = await axios.post("/api/users/signup", {
          name,
          email,
          phone,
          password,
          passwordConfirm,
        });
        // token(data.data.data);
        setSpinner(false);
        // navigate("/verify_email");
        setSuccess(true);
        // // console.log(data.data.data);
      } catch (error) {
        // // console.log("email already exists ...");
        // console.log(error.response.data.message);
        setError(error.response.data.message);

        setSpinner(false);
      }
    } else {
      alert("Please fill all fields");
    }
  };
  console.log(success);
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        {!success ? (
          <Container maxWidth="sm">
            <form onSubmit={(e) => onSubmit(e)}>
              <Box sx={{ my: 3 }}>
                <Typography color="textPrimary" variant="h4">
                  Create a new account
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Use your email to create a new account
                </Typography>
              </Box>
              <TextField
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                fullWidth
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="First Name"
                margin="normal"
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                fullWidth
                helperText={formik.touched.lastName && formik.errors.lastName}
                label="Last Name"
                margin="normal"
                name="lastName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Mobile Number"
                margin="normal"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.phone}
                variant="outlined"
              />
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
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  ml: -1,
                }}
              >
                <Checkbox
                  checked={formik.values.policy}
                  name="policy"
                  onChange={formik.handleChange}
                />
                <Typography color="info" variant="body2">
                  I have read the{" "}
                  <Link
                    to="/"
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {Boolean(formik.touched.policy && formik.errors.policy) && (
                <FormHelperText error>{formik.errors.policy}</FormHelperText>
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
                  Sign Up Now{" "}
                  <Box sx={{ display: "flex", pl: 2 }}>
                    {spinner ? (
                      <Stack sx={{ color: "grey.500", pl: 2 }}>
                        <CircularProgress color="warning" />
                      </Stack>
                    ) : (
                      false
                    )}
                  </Box>
                </Button>
                {error ? (
                  <Alert variant="filled" severity="error">
                    <AlertTitle>Warning</AlertTitle>
                    {error}
                  </Alert>
                ) : null}
              </Box>
              <Typography color="textSecondary" variant="body2">
                Have an account?{" "}
                <Link to="/login" variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Container>
        ) : (
          <Container maxWidth="sm"  className="verification">
            <Box sx={{ py: 5 }}>
              <Typography variant="h6" gutterBottom color="text.primary" mt={2}>
                Email Verification Pending
              </Typography>
              <Divider />
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.secondary"
              >
                Hi <span style={{color:"#e52e71"}}>{formik.values.firstName + " " + formik.values.lastName}</span>,
                <br />
                Thank you for choosing Us to deal with OBPMS client portal.
                <br />
                We need a little more information to complete your registration,
                including a confirmation of your email address. Kindly open your
                inbox of <span style={{color:"#e52e71"}}>{formik.values.email}</span> and tap on link to verify.
                <br />
                After verifying the email tap on the login button below to access the portal.
              </Typography>
              <Link to="/login">
                <Button
                  className="buttonC"
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Container>
        )}
      </Box>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "REGISTER_USER", payload: data }),
});

export default connect(null, mapDispatchtoProps)(Register);
