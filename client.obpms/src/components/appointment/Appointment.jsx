import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import axios from "../../axios";
// import axios from 'axios';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}







const Appointment = ({ user }) => {
  const id = useParams();
  const navigate = useNavigate();

  const [allpros, setAllpros] = React.useState([]);
  const [appDate, setAppDate] = React.useState("");
  const [appTime, setAppTime] = React.useState("");

  
  React.useEffect(() => {
    const getProduct = async (id) => {
      try {
        const allProduct = await axios.get(
          `/api/parlours/allproducts/${id.id}`
        );

        // // console.log(allProduct.data.data);

        setAllpros(allProduct?.data?.data?.allProducts);
      } catch (error) {
        // console.log(error?.response?.data);
      }
    };
    getProduct(id);
  }, [id]);

  // // console.log(user);

  ///razorpay

  // // console.log(new Date(`${appDate} ${appTime}`));


  const bookNow = async () => {
    let data = {
      parlourName: allpros?.parlour?.name,
      ProductName: allpros?.title,
      takenTime: allpros?.duration,
      date: new Date(`${appDate} ${appTime}`),
      price: allpros?.price*1,
      email: allpros?.parlour?.email,
      parlour: allpros?.parlour?.id,
    };

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
 
    if (appDate && appTime) {
      try {       
        const razorpay = await axios.post("/api/users/razorpay", data, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }) 
        const options = {
          key:'rzp_test_x9p9LcFO0lqDba',
          currency: razorpay.data.currency,
          amount: razorpay.data.amount.toString(),
          order_id: razorpay.data.id,
          name: 'OBPMS-Summer',
          description: 'Thank you for service. Please give us some money',
          handler: async function (response) {
            const userData = await axios.post("/api/users/booking", data, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
            
            alert(userData?.data?.data?.status);
            navigate("/product");
          },
    
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
      //  // console.log(razorpay.data); 
        
        
      } catch (error) {
        // setProgress(1);
        // console.log(error.response.data);
      }
    }
  };

  return (
    <div>
      <Container>
        <Box sx={{ py: 5 }}>
          <Card sx={{ p: "30px" }}>
            <Typography
              variant="h5"
              sx={{ pt: "20px", pb: "20px", textAlign: "center" }}
            >
              Appointment Scheduling Window
            </Typography>
            <Divider />
            <Stack component="form" sx={{py:4}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", paddingTop: "15px" }}>
                    <TextField
                      id="Parlour-Name"
                      label="Parlour Name"
                      fullWidth
                      defaultValue="Parlour Name Here"
                      InputProps={{
                        readOnly: true,
                      }}
                      value={allpros?.parlour?.name}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", paddingTop: "15px" }}>
                    <TextField
                      id="Parlour-Address"
                      label="Parlour Address"
                      fullWidth
                      defaultValue="Parlour Address Here"
                      value={`${allpros?.parlour?.localityName} ${allpros?.parlour?.cityName} ${allpros?.parlour?.pinCode}`}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", paddingTop: "15px" }}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Service Name"
                      fullWidth
                      defaultValue="Selected Service Name Here"
                      value={allpros?.title}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", paddingTop: "15px" }}>
                    <TextField
                      fullWidth
                      id="outlined-read-only-input"
                      label="Time taken"
                      defaultValue="Time duration(In minutes)"
                      value={allpros?.duration}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ width: "100%", paddingTop: "15px" }}>
                    <TextField
                      id="Product-Price"
                      label="Product Price"
                      fullWidth
                      defaultValue="Product Price Here(In USD)"
                      value={allpros?.price}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  width: "100%",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              >
                <Typography variant="subtitle2" sx={{ pt: "20px", pb: "20px" }}>
                  Select Date and time for Appointment Scheduling.
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="date"
                    label="Select date"
                    type="date"
                    defaultValue="2022-03-26"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setAppDate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="time"
                    fullWidth
                    label="Select timing"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                    onChange={(e) => setAppTime(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Stack>
            <Box sx={{ paddingTop: "15px" }}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => bookNow()}
              >
                Book Now
              </Button>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.data,
});

export default connect(mapStatetoProps, null)(Appointment);
