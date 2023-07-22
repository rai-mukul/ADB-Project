import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { Container, Grid, TextField, Typography } from "@mui/material";
import axios from "../../axios";
import FormData from "form-data";
import { connect } from "react-redux";

const AddProducts = ({ user }) => {
  const [file, setFile] = React.useState(null);
  const [progress, setProgress] = React.useState(1);
  const [product, setProduct] = React.useState("");
  const [price, setPrice] = React.useState(Number);
  const [desc, setDesc] = React.useState("");
  const [duration, setDuration] = React.useState(Number);

  const data = new FormData();
  data.append("photo", file);
  data.append("title", product);
  data.append("price", price);
  data.append("desc", desc);
  data.append("duration", duration);

  // // console.log(file,user,progress)

  const addproduct = async () => {
    try {
      const userData = await axios.post("/api/parlours/productadd", data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(userData.data);
      setProgress(100);
      alert('Product Added Successfully...')
    } catch (error) {
      setProgress(1);
      // console.log(error.response.data);
    }
  };

  return (
    <div>
      <Container>
        <Box sx={{ pt: 5 }}>
          <h3 align="center">Add Services</h3>
        </Box>
       

        <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={5}
          sx={{ paddingTop: "10px" }}
        >
          <Typography varient="h6">Upload single image file.</Typography>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </Stack>
        <Box sx={{ width: "100%", paddingTop: "10px" }}>
          <LinearProgress
            value={progress} //value for progress in number type from 0-100
            variant="determinate"
          />
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="number"
                id="timeDuration"
                label="Time Duration(in Minutes)"
                variant="standard"
                fullWidth
                onChange={(e) => setDuration(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                id="productName"
                label="Service Name"
                variant="standard"
                fullWidth
                onChange={(e) => setProduct(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="number"
                id="productPrice"
                label="Service Price(in Rupees)"
                variant="standard"
                fullWidth
                onChange={(e) => setPrice(e.target.value)}
              />
            </Box>
          </Grid>
       
          <Grid item xs={12}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                id="standard-textarea"
                label="Service Description"
                placeholder="Add details about service you want to add."
                multiline
                variant="standard"
                fullWidth
                onChange={(e) => setDesc(e.target.value)}
              />
            </Box>
          </Grid>
          <Box
            sx={{
              marginTop: 8,
              pl: 5,
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              component="span"
              onClick={() => addproduct()}
            >
              Add Service
            </Button>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(AddProducts);
