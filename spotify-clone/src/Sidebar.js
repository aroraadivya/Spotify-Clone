import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search"; // Updated import
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"; // Updated import
import { useStateValue } from "./StateProvider";

function Sidebar() {
  // const [{ playlists }, dispatch] = useStateValue();
  const [{ playlists }] = useStateValue();
  
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
