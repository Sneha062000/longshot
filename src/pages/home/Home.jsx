import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Widget from "../../components/widget/Widget";
import Table1 from "../../components/table/Table1"

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="Home-container">
        <Navbar />
        <div className="widgets">
          <Widget />
        </div>
        
      <div className="listContainer">
        <div className="listTitle"></div>
          <Table1 />
        </div>
      </div>
    </div>
  );
};

export default Home;
      