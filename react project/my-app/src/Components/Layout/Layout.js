import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">{props.children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
