import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Packages from "../Packages/Packages";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      const sections = ["home", "services", "packages"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;
          if (isInView) {
            setActiveSection(section);
            window.history.replaceState(null, "", `#${section}`);
            break;
          }
        }
      }
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsHomeVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

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
          scrolled ? "bg-[#171717]" : isHomeVisible ? "bg-transparent" : ""
        }`}
      >
        <Header
          scrolled={scrolled || !isHomeVisible}
          activeSection={activeSection}
          onSectionChange={(section) => setActiveSection(section)}
        />
      </div>

      <div className="">
        <Home />
        <Services />
        <Packages />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
