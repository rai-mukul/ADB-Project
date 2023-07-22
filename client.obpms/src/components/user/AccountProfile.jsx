import React, {useEffect} from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import axios from "../../axios";

import FormData from "form-data";

const AccountP = (props) => {
  const [photo, setPhoto] = React.useState(null);

  const data = new FormData();
  data.append("photo", photo);
  data.append("id", props.user.user._id);

  const addproduct = async () => {
    try {
      const userData = await axios.patch("/api/users/user_update", data);
      // console.log(userData.data.data.user.photo);
      props.token(userData.data.data.user);
      // alert("update Successfully...");
    } catch (error) {
      // console.log(error?.response);
    }
  };
  // console.log('loaded', props)
  return (
    <div>
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
              src={props.user.user.photo}
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {`${props?.user?.user?.name}`}
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
            <Box sx={{ ml: 1, pt: 2 }}>
              <Button variant="outlined" onClick={() => addproduct()}>
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.data,
});

const mapDispatchtoProps = (dispatch) => ({
  token: (data) => dispatch({ type: "UPDATE", payload: data }),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(AccountP);
