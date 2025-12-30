import { Button } from "antd";
import LogoIcon from "../../assets/svg/logo.svg?react";
import HamburgerIcon from "../../assets/svg/hamburger.svg?react";
const Header = () => {
  return (
    <div className="flex w-full justify-between h-10">
      <div>
        <LogoIcon />
      </div>
      <div className="flex text-[#737373] font-medium text-[16px] items-center">
        <ul className="flex gap-11">
          <li className="cursor-pointer hover:text-[white] transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-[white] transition-colors">
            Services
          </li>
          <li className="cursor-pointer hover:text-[white] transition-colors">
            Packages
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <Button
          size="small"
          className="bg-[#F4F2FF]! text-[#9A85FF]! border border-[#D8D4FF] hover:bg-[#F4F2FF]!"
        >
          Join as Partner
        </Button>
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default Header;
