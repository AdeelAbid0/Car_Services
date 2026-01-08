import { useState } from "react";
import EmptyView from "../../Components/EmptyView/EmptyView";
import BookingEmptyIcon from "../../assets/Images/booking-empty.svg?react";
const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  return (
    <div className="flex justify-center items-start mt-21.75 h-[calc(100vh-87px)]">
      {bookingData.length > 0 ? (
        <div>
          {bookingData.map((booking) => (
            <div key={booking.id}>
              <h2>{booking.title}</h2>
              <p>{booking.description}</p>
            </div>
          ))}
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
