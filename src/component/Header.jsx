import React from "react";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { fontSize } from "@mui/system";
const logo = "Xkeeper";

const Header = () => {
  return (
    <nav className="nav-bar">
      <HistoryEduIcon style={{fontSize: 50}} />
      <h1 className="logo">{logo}</h1>
    </nav>
  );
};

export default Header;
