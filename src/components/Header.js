import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <h1>Analytics</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          alt="Adaline Lively"
          src="/path/to/avatar.jpg"
          style={{ height: "25px", width: "25px" }}
        />
      </div>
    </div>
  );
};

export default Header;
