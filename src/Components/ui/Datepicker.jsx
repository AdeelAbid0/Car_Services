import { DatePicker } from "antd";
import CalendarIcon from "../../assets/svg/calendar-outline.svg?react";
const Datepicker = ({ placeholder, handleDateChange, size }) => {
  return (
    <DatePicker
      placeholder={placeholder}
      onChange={handleDateChange}
      suffixIcon={<CalendarIcon />}
      size={size}
      style={{ width: "100%" }}
    />
  );
};

export default Datepicker;
