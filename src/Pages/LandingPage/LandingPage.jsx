import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import { ROUTES } from "../../constants/routes";

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="w-full">
      <div className="absolute z-50 w-full">
        <Header activeSection={activeSection} />
      </div>
      <div className="">
        <Home />
      </div>
    </div>
  );
};

export default LandingPage;
