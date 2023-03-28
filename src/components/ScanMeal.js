import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from './Footer';
import SmallCards from "./SmallCards";

const ScanMeal = () => {
  return (
    <div className="div-flex " style={{marginTop: "110px"}}>
      <Navigation />
      <center>
        <SmallCards/>
        <br/>
        <hr/>
        <Footer />
      </center>
    </div>
  )
}

export default ScanMeal
