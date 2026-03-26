import DummyIcon from "../assets/svg/dummy.svg?react";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../assets/svg/arrow-right.svg?react";
import { useState } from "react";
import { ROUTES } from "../constants/routes";
import CommonModal from "../ui/Modal/Modal";
import PartnerCard from "./PartnerCard";
import CustomCalendar from "./Calendar";

const BookingModal = ({ showBookingModal, setShowBookingModal }) => {
  const [showCalendarScreen, setShowCalendarScreen] = useState(false);
  const navigate = useNavigate();
  return (
    <CommonModal
      open={showBookingModal}
      onClose={() => setShowBookingModal(false)}
      footer={null}
    >
      <div className="flex flex-col w-full relative">
        {/* Header */}
        <div className="sticky top-0 flex w-full justify-between h-24.5 bg-white rounded-tl-[25px] rounded-tr-[25px] border-b border-border">
          <div className="flex gap-3 w-full justify-center items-center border-r border-border">
            <span className="flex justify-center items-center w-13 h-13 bg-background/30 rounded-xl">
              <DummyIcon />
            </span>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-muted-foreground text-[16px] font-normal! leading-6">
                Accumulator
              </h1>
              <p className="text-primary text-[13px] font-normal">
                2.8 km away
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center border-r border-border">
            <div className="flex items-center justify-center gap-3 w-13 h-13">
              <img
                src="/Images/hero-image.png"
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <h1 className="text-muted-foreground text-[16px] font-normal! leading-6">
                Accumulator
              </h1>
            </div>
          </div>
          <div className="flex gap-3 w-full justify-center items-center">
            <span className="flex justify-center items-center w-13 h-13 bg-background/30 rounded-xl"></span>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-muted-foreground text-[16px] font-normal! leading-6">
                N/A
              </h1>
            </div>
          </div>
        </div>
        {/* Content */}
        {showCalendarScreen ? (
          <div className="flex w-full justify-center">
            <div className="flex w-[60%]  items-center flex-col gap-2 p-10 max-h-[80vh] overflow-auto">
              <CustomCalendar />
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col gap-2 p-10 max-h-[70vh] overflow-auto">
            <h1 className="text-foreground text-2xl font-semibold!">
              Choose Partner
            </h1>
            {[1, 2, 3].map((item) => {
              return (
                <PartnerCard
                  profileImage={"/Images/hero-image.png"}
                  tag={"Recommended"}
                  shopName={"Detail Kings"}
                  status={"Available Now  "}
                  location={"H-8 Sector, Islamabad"}
                  distance={"2.8 km away"}
                  services={"Leather Conditioning"}
                  price={"3000"}
                  rating={5}
                />
              );
            })}
          </div>
        )}
        {/* Footer */}
        <div className="flex h-17.5 items-center justify-end border-t border-border bg-transparent rounded-bl-[25px] rounded-br-[25px] px-10">
          <Button
            type="primary"
            label={showCalendarScreen ? "Book Service" : "Continue"}
            onClick={() => {
              if (showCalendarScreen) {
                navigate(ROUTES.LOGIN);
              } else {
                setShowCalendarScreen(true);
              }
            }}
            suffixIcon={<ArrowRightIcon />}
            className="max-w-37 h-12 bg-primary text-white font-medium"
          />
        </div>
      </div>
    </CommonModal>
  );
};

export default BookingModal;
