import { useEffect } from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Packages from "../Packages/Packages";

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="w-full">
      <Home />
      <Services />
      <Packages />
    </div>
  );
};

export default LandingPage;
