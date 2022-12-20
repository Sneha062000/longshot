import React from "react";
import "./navbar.scss";
// import FlagIcon from "@mui/icons-material/Flag";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        Keyword explorer {"<"} <b>Keyword Overview</b>
        <h2>
          Keyword : <b>Shopping in barceiona</b>
        </h2>
        <h3>
          Database : United States🚩
          {/* <FlagIcon /> */}
        </h3>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
