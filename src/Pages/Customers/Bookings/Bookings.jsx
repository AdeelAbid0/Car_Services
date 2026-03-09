import { useState } from "react";
import EmptyView from "../../../Components/EmptyView/EmptyView";
import BookingEmptyIcon from "../../../assets/Images/booking-empty.svg?react";
import ArrowRightIcon from "../../../assets/svg/arrow-right.svg?react";
import BookingCard from "../../../Components/BookingCard/BookingCard";
import { ROUTES } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState([]);
  const [selectedTab, setSelectedTab] = useState("upcoming");

  const tabs = [
    {
      id: 1,
      label: "Upcoming",
      value: "upcoming",
    },
    {
      id: 2,
      label: "Ongoing",
      value: "ongoing",
    },
    {
      id: 3,
      label: "Completed",
      value: "completed",
    },
    {
      id: 4,
      label: "Canceled",
      value: "canceled",
    },
  ];

  return (
    <div className="flex w-full justify-center items-start">
      {!bookingData.length > 0 ? (
        <div className="mt-11 w-full max-w-[72%]">
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-1 justify-center">
              <h1 className="text-2xl font-bold! text-foreground">
                My Bookings
              </h1>
              <p className="text-[16px] text-muted-foreground font-normal">
                Track your upcoming, ongoing, and completed services.
              </p>
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                navigate(ROUTES.MY_WALLET);
              }}
            >
              <div className="flex items-center px-4 py-1.75 gap-2 bg-foreground rounded-lg cursor-pointer hover:bg-foreground/80 transition-colors">
                <p className="text-white font-normal text-sm">PKR 0</p>
                <span className="h-3 border border-foreground/80 "></span>
                <p className="text-white font-normal text-sm">My wallet</p>
                <ArrowRightIcon className="text-white" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex w-full flex-wrap gap-6 mt-11 border-b border-border">
            {tabs.map((item) => (
              <div
                key={item.id}
                className={`pb-2 relative cursor-pointer transition-all duration-200 ${
                  selectedTab === item.value
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setSelectedTab(item.value)}
              >
                <h2 className="text-sm font-medium whitespace-nowrap">
                  {item.label}
                </h2>
                {selectedTab === item.value && (
                  <div className="absolute -bottom-0.5 left-0 w-full h-[1.5px] bg-primary z-10"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <BookingCard
              profileImage={"/Images/hero-image.png"}
              shopName={"Detail Kings"}
              status={"Scheduled"}
              partner={"Partner name"}
              dateTime={"24 Feb - 09:00 AM"}
              location={"H-8 Sector, Islamabad"}
              price={"3000"}
              rating={5}
            />
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <EmptyView
            icon={<BookingEmptyIcon />}
            title={"All your services, in one place"}
            description={
              "After booking, track status, contact partners, and manage everything here."
            }
            buttonText={"Browse Service"}
          />
        </div>
      )}
    </div>
  );
};

export default Bookings;
