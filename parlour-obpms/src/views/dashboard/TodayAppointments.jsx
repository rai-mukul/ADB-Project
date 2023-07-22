import React, { useEffect } from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { connect } from "react-redux";
import axios from "../../axios";

const TodayAppointments = (props) => {
  let [rows, setRows] = React.useState([]);

  // // console.log(rows);

  useEffect(() => {
    const data = { id: props.user.parlour._id };
    const fetch = async () => {
      try {
        const datas = await axios.post("/api/parlours/today", data);
        // // console.log(datas.data);
        setRows(datas?.data?.data.todayOrder);
      } catch (error) {
        // console.log(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <Card {...props} className="cardBg1">{
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TODAY'S APPOINTMENT
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {rows.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "#0d1ea9",
                height: 56,
                width: 56,
              }}
            >
              <BeenhereIcon />
            </Avatar>
          </Grid>
        </Grid>
        {/* <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          16%
        </Typography>
        <Typography color="textSecondary" variant="caption">
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

export default connect(mapStatetoProps, null)(TodayAppointments);
