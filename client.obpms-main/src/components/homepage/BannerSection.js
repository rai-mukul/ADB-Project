import * as React from "react";
import BannerSectionLayout from "./BannerSectionLayout";
import { Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const backgroundImage =
  "/banner/1.jpg";

export default function BannerSection({setQ}) {
  return (
    <BannerSectionLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Fashion
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Discover and book appointments with the top grooming and personal care
        specialists in your neighbourhood.
      </Typography>
      <SearchBar setQ={setQ} />
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </BannerSectionLayout>
  );
}
