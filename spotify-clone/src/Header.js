import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@mui/material";  // Updated import
import SearchIcon from "@mui/icons-material/Search"; // Updated import

function Header({ spotify }) {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        {/* Safe check for user image URL */}
        <Avatar
          alt={user?.display_name || "User Avatar"}  // Fallback alt text
          src={user?.images?.[0]?.url || ""}          // Optional chaining and empty string fallback
        />
        <h4>{user?.display_name || "Guest"}</h4>       {/* Fallback display name */}
      </div>
    </div>
  );
}

export default Header;
