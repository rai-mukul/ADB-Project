import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import { connect } from "react-redux";
import axios from "../../axios";
// import axios from 'axios';

const columns = [
  { field: "id", headerName: "S. No.", width: 150 },
  { field: "parlourName", headerName: "Parlour Name", width: 250 },
  { field: "productName", headerName: "Service Name", width: 300 },
  { field: "date", headerName: "Appointment Timing", width: 220 },
  { field: "price", headerName: "Order Price(in USD)", width: 220 },
];

const BookingHistory = ({ user }) => {
  let [rows, setRows] = useState([]);

  let b = [];
  rows.map((d, i) => {
    var obj = {};
    obj["parlourName"] = d.parlourName;
    obj["productName"] = d.productName;
    obj["date"] = d.date;
    obj["price"] = d.price;
    obj["id"] = i + 1;
    b.push(obj);
  });

  rows = b;

  useEffect(() => {
    const data = { id: user.user._id };
    const fetch = async () => {
      try {
        const userData = await axios.post("/api/users/history", data);
        setRows(userData?.data?.data.orders);
      } catch (error) {
        // console.log(error.response.data);
      }
    };

    fetch();
  }, []);

  // // console.log(rows);

  return (
    <div>
      <Container>
        <Box sx={{py: 5 }}>
          <h3 align="center">My Booking History</h3>
        </Box>
        <Box sx={{pb: 5 }}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            porderDateSize={5}
            rowsPerPorderDateOptions={[5]}
          />
        </div>
        </Box>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.data,
});

export default connect(mapStatetoProps, null)(BookingHistory);
