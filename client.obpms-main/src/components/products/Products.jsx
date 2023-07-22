import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/AddShoppingCart";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Box } from "@mui/system";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [allpros, setAllpros] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const allProduct = await axios.get("/api/parlours/allproducts");
        // console.log(allProduct.data.data)

        setAllpros(allProduct?.data?.data?.allProducts);
      } catch (error) {
        // console.log(error.response.data);
      }
    };

    getProduct();
  }, []);

  // // console.log(allpros);

  return (
    <div>
      <Container>
      <Divider style={{paddingTop:10,paddingButtom:10 }}>
        <Chip color="warning" avatar={<Avatar>P</Avatar>} label="Available Products" />
      </Divider>
        <Grid
          container
          spacing={5}
          sx={{
            py: 5,
            alignItems: "center",
            margin: "auto",
          }}
        >
          {allpros.map((cuttingData, i) => {
            return (
              <Grid item xs={12} md={4} sm={12} key={i + 1}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={cuttingData.title}
                    image={cuttingData.photo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {cuttingData.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      dangerouslySetInnerHTML={{ __html: cuttingData.desc }}
                    ></Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Saloon : {cuttingData.parlour.name}
                    </Typography>
                    <Box sx={{ paddingTop: "20px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          Price : &#8377; {cuttingData.price}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          Time : {cuttingData.duration} minutes
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ float: "inline-end" }}>
                    <Stack>
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/product/${cuttingData._id}`)}
                        endIcon={<SendIcon  />}
                        className='buttonC'
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
