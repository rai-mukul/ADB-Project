import { Box, Checkbox, Container, FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import axios from "../../axios";
import FormData from "form-data";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const AddStylist= ({ user }) => {
  // const [personName, setPersonName] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [phone, setPhone] = React.useState("");



  const addstylists = async () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("phone", phone);

      const stylistData = await axios.post("/api/parlours/addstylist", data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(stylistData.data);
      alert("Stylist Added Successfully...");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // const handleChange = (event) => { 
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  return (
    <div>
      <Container>
        <Box sx={{ pt: 5 }}>
          <h3 align="center">Add Stylist</h3>
        </Box>
        <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="text"
                id="stylist-name"
                label="Stylist Name"
                variant="standard"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                id="stylist-contact"
                label="Phone Number"
                type="number"
                variant="standard"
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel  variant="standard" id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  variant="standard"
                  value={personName}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid> */}

          {/* <Grid item xs={12}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                id="standard-textarea"
                label="Service Description"
                placeholder="Add details about service you want to add."
                multiline
                variant="standard"
                fullWidth
              />
            </Box>
          </Grid> */}
          <Box
            sx={{
              marginTop: 8,
              pl: 5,
              alignItems: "center",
            }}
          >
            <Button variant="contained" component="span" onClick={() => addstylists()}>
              Add Service
            </Button>
          </Box>
        </Grid>
        </form>
      </Container>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStatetoProps, null)(AddStylist);