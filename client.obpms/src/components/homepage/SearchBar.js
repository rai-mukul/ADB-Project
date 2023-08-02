import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";
import SearchResult from "./SearchResult";
import axios from "../../axios";
// import axios from 'axios';

export default function SearchBar({}) {
  const [search, setSearch] = React.useState();
  const [setUp, setSetUp] = React.useState(false);
  const [q, setQ] = React.useState([]);

  // // console.log(search);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setSetUp(true);
      const { data } = await axios.post("/api/parlours/getAllParlours", {
        search,
      });
      // // console.log(data)
      setQ(data.data.products);
    } catch (error) {
      // // console.log(error.message);
    }
  };

  return (
    <>
      <Container sx={{ justifyContent: "center", width: "auto" }}>
        <Paper
          component="form"
          sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter Your Location, e.g. Sector 37, Greater Noida"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={(e) => onSubmit(e)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>
      <SearchResult q={q} setUp={setUp} setSetup={setSetUp} />
    </>
  );
}
