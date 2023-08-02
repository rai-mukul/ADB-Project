import React, { useEffect } from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import { connect } from "react-redux";
import axios from "../../axios";
// import axios from 'axios';

const TotalCustomers = (props) => {
  let [rows, setRows] = React.useState([]);

  // // console.log(rows);

  useEffect(() => {
    const data = { id: props.user.parlour._id };
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
    <Card {...props} className="cardBg3">
      {
        <CardContent>
          <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="overline">
                TOTAL CUSTOMERS
              </Typography>
              <Typography color="textPrimary" variant="h4">
                {rows.length}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar
                sx={{
                  backgroundColor: "success.main",
                  height: 56,
                  width: 56,
                }}
              >
                <PeopleIcon />
              </Avatar>
            </Grid>
          </Grid>
          {/* <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box> */}
        </CardContent>
      }
    </Card>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(TotalCustomers);
