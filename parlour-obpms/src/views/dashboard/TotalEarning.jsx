import React, { useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import axios from "../../axios";
import { connect } from "react-redux";

const TotalEarning = ({ user }) => {
  let [rows, setRows] = React.useState([]);

  useEffect(() => {
    const data = { id: user.parlour._id };
    const fetch = async () => {
      try {
        const userData = await axios.post("api/parlours/history", data);
        setRows(userData?.data?.data.orders);
      } catch (error) {
        // console.log(error.response.data);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <Card sx={{ height: "100%" }} className="cardBg2">
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                Total Earning
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {rows.length !== 0
                  ? rows.reduce((a, { price }) => a + price, 0)
                  : false}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "#cb4074",
                  height: 56,
                  width: 56,
                }}
              >
                <CurrencyRupeeIcon />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(TotalEarning);
