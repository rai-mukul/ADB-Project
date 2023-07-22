import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import { connect } from "react-redux";
import axios from "../../axios";

const columns = [
  { field: "id", headerName: "S. No.", width: 150 },
  { field: "userName", headerName: "User Name", width: 250 },
  { field: "productName", headerName: "Service Name", width: 300 },
  { field: "date", headerName: "Order Date", width: 220 },
  { field: "price", headerName: "Order Price(in Rupees)", width: 220 },
];

const History = ({ user }) => {
  let [rows, setRows] = useState([]);
  let b = [];
  rows.map((d, i) => {
    var obj = {};
    obj["userName"] = d.userName;
    obj["productName"] = d.productName;
    obj["date"] = d.date;
    obj["price"] = d.price;
    obj["id"] = i + 1;
    b.push(obj);
  });

  rows = b;
  // console.log(rows)

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
      <Container>
        <Box sx={{ pt: 5, pb: 5 }}>
          <h3 align="center">My Booking History</h3>
        </Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            porderDateSize={5}
            rowsPerPorderDateOptions={[5]}
          />
        </div>
      </Container>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(History);
