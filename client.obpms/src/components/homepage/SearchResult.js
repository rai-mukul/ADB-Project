import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import SendIcon from "@mui/icons-material/AddShoppingCart";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchResult({ q = [], setUp, setSetup }) {
  const navigate = useNavigate();

  const handleClose = () => {
    setSetup(false);
  };
  // console.log("datadata", q);
  return (
    <div>
      <Dialog
        fullScreen
        open={setUp}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} className="navBackground">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: "white" }}
              variant="h6"
              component="div"
            >
              Search Results
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid
            container
            spacing={5}
            sx={{
              py: 5,
              alignItems: "center",
              margin: "auto",
            }}
          >
            {q.map((item, i) => (
              <Grid xs={12} md={4} sm={12} key={i}>
                <Card style={{ maxWidth: "95%" }}>
                  <CardMedia
                    component="img"
                    // alt={cuttingData.title}
                    // image={cuttingData.photo}
                    image={item.photo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {/* {cuttingData.title} */}
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      //   dangerouslySetInnerHTML={{ __html: cuttingData.desc }}
                    >
                      {item.desc}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {/* Saloon : {cuttingData.parlour.name} */}
                      {/* Saloon : GBU_hair Cutting */}
                    </Typography>
                    <Box sx={{ paddingTop: "20px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          {/* Price : &#8377; {cuttingData.price} */}₹{" "}
                          {item.price}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          {/* Time : {cuttingData.duration} minutes */}
                          Time : {item.duration}
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ float: "inline-end" }}>
                    <Stack>
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/product/${item._id}`)}
                        endIcon={<SendIcon />}
                        className="buttonC"
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Dialog>
    </div>
  );
}
