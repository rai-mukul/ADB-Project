import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container, Grid, TextField } from "@mui/material";
import axios from "../../axios";
// import axios from 'axios';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateProduct = ({ user }) => {
  const { id } = useParams();
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(Number);
  const [desc, setDesc] = React.useState();
  const [duration, setDuration] = React.useState(Number);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const userData = await axios.get(`/api/parlours/allproducts/${id}`);
        // // console.log(userData.data.data.allProducts)
        setTitle(userData.data.data.allProducts.title);
        setPrice(userData.data.data.allProducts.price);
        setDuration(userData.data.data.allProducts.duration);
        setDesc(userData.data.data.allProducts.desc);
        // console.log(userData.data.data.allProducts);
      } catch (error) {
        // console.log(error.response.message);
      }
    };
    getProducts();
  }, [id]);

  const updateproduct = async () => {
    let data = {
      title,
      desc,
      price,
      duration,
    };
    try {
      const userData = await axios.patch(
        `/api/parlours/productedit/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(userData);

      alert("Service Updated Successfully...");
    } catch (error) {
      // console.log(error.response.data);
    }
  };

  return (
    <div>
      <Container>
        <Box sx={{ pt: 5 }}>
          <h3 align="center">Update Service</h3>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="number"
                id="timeDuration"
                label="Time Duration(in Minutes)"
                variant="standard"
                defaultValue="120"
                fullWidth
                value={duration}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="number"
                id="productPrice"
                label="Service Price(in USD)"
                variant="standard"
                fullWidth
                value={price}
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
                defaultValue={desc}
                // value={desc}
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
              onClick={() => updateproduct()}
            >
              Service Product
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

export default connect(mapStatetoProps, null)(UpdateProduct);
