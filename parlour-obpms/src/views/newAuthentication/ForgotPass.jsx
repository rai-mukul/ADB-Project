import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import SuccessBox from "./SuccessBox";
import axios from "../../axios";
// import axios from 'axios';

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
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function ForgotPass() {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${window.location.origin}/resetpassword`;
      const data = await axios.post("api/parlours/forget_password", {
        email,
        url,
      });
      console.log(data);
      setSent(true);
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div>
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
            Forgot Password
          </Typography>
          <Box sx={{ py: 5 }}>
            <Typography color="textSecondary" gutterBottom variant="body">
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </Typography>
          </Box>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="btn-login"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => onSubmit(e)}
            >
              Forgot Password
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Remember your password?
                </Link>
              </Grid>
            </Grid>
            {sent ? <SuccessBox /> : false}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
}
