import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "../../axios";
import { connect } from "react-redux";
import { pink } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

const MyProducts = ({ user }) => {
  const history = useHistory();
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const userData = await axios.get("/api/parlours/productget", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        // // console.log(userData.data.data.products)
        setProducts(userData.data.data.products);
      } catch (error) {
        // console.log(error.response.message);
      }
    };
    getProducts();
  }, []);

  const deleteProduct = async (id) => {
    // console.log(id);
    try {
      const userData = await axios.delete(`/api/parlours/productdelete/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(userData)
      window.location.reload();
      alert("Delete Service successfully ...");
    } catch (error) {
      // console.log(error.response.message);
    }
  };

  return (
    <div>
      <Container>
        <Grid
          container
          spacing={5}
          sx={{
            py: 5,
          }}
        >
          {products.map((navData, i) => {
            // // console.log(navData.id);
            return (
              <Grid item xs={6} md={4} key={i + 1}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                    image={navData.photo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {navData.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      dangerouslySetInnerHTML={{ __html: navData.desc }}
                    ></Typography>
                  </CardContent>
                  <Box>
                    <Grid container>
                      <Grid item xs>
                        <Tooltip describeChild title="You can delete it.">
                          <Button
                            sx={{ color: pink[500] }}
                            onClick={() => deleteProduct(navData.id)}
                          >
                            <DeleteIcon sx={{ color: pink[500] }} /> Delete
                          </Button>
                        </Tooltip>
                      </Grid>
                      <Grid item xs>
                        <Tooltip describeChild title="You can edit it.">
                          <Button
                            sx={{ color: pink[500] }}
                            onClick={() =>
                              history.push(`/update-product/${navData.id}`)
                            }
                          >
                            <EditIcon sx={{ color: pink[500] }} /> Edit
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(MyProducts);
