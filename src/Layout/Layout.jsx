import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
