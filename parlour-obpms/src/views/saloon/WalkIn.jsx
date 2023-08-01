import {
  Box,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

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
const stylists = [
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
export default function WalkIn() {
  const [personName, setPersonName] = React.useState([]);
  const [stylistName, setStylistName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };
  const handleStylist = (event) => {
    setStylistName(event.target.value);
  };
  return (
    <div>
      <Container>
        <Box sx={{ pt: 5 }}>
          <h3 align="center">Walk In Reservation</h3>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                type="text"
                id="Customer-name"
                label="Customer Name"
                variant="standard"
                fullWidth
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
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{ paddingTop: '10px' }}>
      <FormControl className="w-100">
        <InputLabel variant="standard" id="demo-single-select-label">
          Select Service
        </InputLabel>
        <Select
          labelId="demo-single-select-label"
          id="demo-single-select"
          variant="standard"
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => selected} // Render the selected single service directly
          MenuProps={MenuProps}
          fullWidth
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName === name} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box sx={{ paddingTop: '10px' }}>
      <FormControl className="w-100">
        <InputLabel variant="standard" id="demo-single-select-label">
          Select Stylist
        </InputLabel>
        <Select
          labelId="demo-single-select-label"
          id="demo-single-select"
          value={stylistName}
          variant="standard"
          onChange={handleStylist}
          renderValue={(selected) => selected} // Render the selected single stylist directly
          MenuProps={MenuProps}
          fullWidth
        >
          {stylists.map((stylist) => (
            <MenuItem key={stylist} value={stylist}>
              <Checkbox checked={stylistName === stylist} />
              <ListItemText primary={stylist} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ paddingTop: "10px" }}>
              <TextField
                id="price"
                label="Price"
                type="number"
                variant="standard"
                defaultValue="50"
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: 8,

            alignItems: "center",
          }}
        >
          <Button variant="contained" component="span">
            Add Service
          </Button>
        </Box>
      </Container>
    </div>
  );
}
