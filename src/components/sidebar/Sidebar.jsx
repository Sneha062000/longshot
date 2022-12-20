import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CakeIcon from "@mui/icons-material/Cake";
import CircleIcon from "@mui/icons-material/Circle";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ExtensionIcon from "@mui/icons-material/Extension";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="Top">
        <ReorderIcon className="icons1" />
        <span className="logo">
          {/* <ReorderIcon className="icons" /> */}
          <i>LONGSHOT</i>
        </span>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {/* <p className="title">project</p> */}
          <li>
            {/* <p className="title">project</p> */}
            <br />
            <span>My First Project</span>
          </li>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <li>
            <CakeIcon className="icons" />
            <span>Recipes</span>
          </li>
          {/* <hr /> */}
          <li>
            <ExtensionIcon className="icons" />
            <span>Templates</span>
          </li>
          <li>
            <FavoriteIcon className="icon1" />
            <span>Favorites</span>
          </li>
          <li>
            <CircleIcon className="icon" />
            <span>Custom Template</span>
          </li>
          {/* <hr /> */}
          <li>
            <IntegrationInstructionsIcon className="icons" />
            <span>Integrations</span>
          </li>
          <li>
            <LocalFireDepartmentIcon className="icon" />
            <span>Semrush</span>
          </li>
        </ul>
      </div>

      <sidebar />
    </div>
  );
};

export default Sidebar;
