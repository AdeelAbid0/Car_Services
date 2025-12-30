import Home from "../Home/Home";
import Services from "../Services/Services";
import Packages from "../Packages/Packages";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Home />
      <Services />
      <Packages />
    </div>
  );
};

export default LandingPage;
