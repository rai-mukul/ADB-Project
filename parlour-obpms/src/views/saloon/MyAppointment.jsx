import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Container } from "@mui/material";
import axios from "../../axios";
// import axios from 'axios';
import { connect } from "react-redux";

const columns = [
  { field: "id", headerName: "S. No.", width: 150 },
  { field: "userName", headerName: "User Name", width: 200 },
  { field: "productName", headerName: "Service Name", width: 300 },
  { field: "date", headerName: "Order Date", width: 220 },
  { field: "price", headerName: "Order Price(in USD)", width: 220 },
];

const MyAppointments = ({ user }) => {
  let [rows, setRows] = React.useState([]);

  // console.log(user);

  useEffect(() => {
    onSubmit();
  }, []);

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

  const onSubmit = async (e) => {
    const data = { id: user.parlour._id };
    try {
      const datas = await axios.post("/api/parlours/today", data);
      // console.log(datas.data);
      setRows(datas?.data?.data.todayOrder);
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <div>
      <Container>
        <Box sx={{ pt: 5, pb: 5 }}>
          <h3 align="center">My booking for today</h3>
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

export default connect(mapStatetoProps, null)(MyAppointments);
