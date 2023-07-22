import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "../../axios";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  const [sent, setSent] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "sample@email.com",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),
  });

  const onSubmit = async (e) => {
    try {
      const url = `${window.location.origin}/resetpassword`;
      const email = formik.values.email;
      const data = await axios.post("api/users/forget_password", {
        email,
        url,
      });

      // console.log(data.data.message);
      setSent(true);
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div>
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
                <Box sx={{ my: 1 }}>
                  <Typography color="textPrimary" variant="h4">
                    Forgot Password
                  </Typography>
                </Box>
                <Box sx={{ py: 5 }}>
                  <Typography color="textSecondary" gutterBottom variant="body">
                    Lost your password? Please enter your username or email
                    address. You will receive a link to create a new password
                    via email.
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
                <Box sx={{ py: 2 }}>
                  <Button
                    className="buttonC"
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => onSubmit()}
                  >
                    Forgot Password
                  </Button>
                </Box>
                {sent ? (
                  <Alert variant="filled" severity="success">
                    Reset link sent successfully.!
                  </Alert>
                ) : (
                  false
                )}
                <Grid item xs>
                  <Typography color="textSecondary" variant="body2">
                    Remember your password?
                    <Link
                      to="/login"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </Link>
                  </Typography>
                </Grid>
              </Card>
            </Container>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
