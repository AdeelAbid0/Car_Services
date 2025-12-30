import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Packages from "../Packages/Packages";
import Header from "../../Components/Header/Header";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Check if Home section is visible
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        // Check if home section is in viewport
        setIsHomeVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="w-full">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#262626]" : isHomeVisible ? "bg-transparent" : ""
        }`}
      >
        <Header scrolled={scrolled || !isHomeVisible} />
      </div>

      <div className="">
        <Home />
        <Services />
        <Packages />
      </div>
    </div>
  );
};

export default LandingPage;
