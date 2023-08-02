import React, { useState } from "react";
import {
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box} from "@mui/system";
import { useParams,useHistory } from "react-router-dom";
import axios from "../../axios";
// import axios from 'axios';

export default function PassInput() {

  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');

  const id = useParams()
  const history = useHistory()

  //  // console.log(id);

  const onSubmit = async (e) => {
   
    try {     
       const data = {
         password,
         passwordConfirm
       }
      const datas = await axios.post(`api/parlours/resetpassword/${id.id}`,data);
      // // console.log(datas.data);
      alert(datas.data.status);
      history.push("/")
    } catch (error) {
      
      // console.log(error.message);
    }
  }



  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          margin: "auto",
          height: "60vh",
        }}
        maxWidth="400px"
      >
        <Card sx={{p:3}}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Grid item>
                <Stack alignItems="center" justifyContent="center" spacing={3}>
                  <Typography
                    color="slateblue"
                    gutterBottom
                    variant={matchDownSM ? "h6" : "h5"}
                  >
                    Hi, Welcome Back To OBPMS Client Portal
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize="16px"
                    textAlign={matchDownSM ? "center" : "inherit"}
                  >
                    Kindly enter your credentials to reset password
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New password"
                    onChange={(e)=>setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password-login">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New password"
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
              <Box sx={{ py: 2 }}>
                  <Button
                    className="buttonC"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onClick={() => onSubmit()}
                  >
                    Change Password
                  </Button>
                </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}
