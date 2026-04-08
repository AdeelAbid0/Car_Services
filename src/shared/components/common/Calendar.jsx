import React, { useState } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("5:00 PM");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const times = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM"
    // "9:00 PM",
    // "9:30 PM",
    // "10:00 PM",
    // "10:30 PM",
    // "11:00 PM",
  ];

  const getDaysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek =
      firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const days = [];
    const prevMonthDays = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i)
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i)
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i)
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = dateObj => {
    setSelectedDate(dateObj.date);
    console.log("Selected Date:", dateObj.date.toDateString());
  };

  const handleTimeClick = time => {
    setSelectedTime(time);
    console.log("Selected Time:", time);
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(selectedDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentDate(nextWeek);
    setSelectedDate(nextWeek);
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCurrentDate(tomorrow);
    setSelectedDate(tomorrow);
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = date => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="flex items-center bg-white rounded-2xl w-full">
      <div className="bg-white rounded-2xl p-4 w-full">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Calendar Section - Smaller */}
          <div className="flex-1 min-w-69">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-700">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex gap-1">
                <span
                  className="flex justify-center items-center text-primary! w-6 h-6 border-[0.75px] border-muted-foreground rounded-md hover:border-primary transition cursor-pointer"
                  onClick={handlePrevMonth}
                >
                  <LeftOutlined className="w-2 h-2" />
                </span>
                <span
                  className="flex justify-center items-center text-primary! w-6 h-6 border-[0.75px] border-muted-foreground rounded-md hover:border-primary transition cursor-pointer"
                  onClick={handleNextMonth}
                >
                  <RightOutlined className="w-2 h-2" />
                </span>
              </div>
            </div>
            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2.5 mb-1">
              {dayNames.map(day => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-500 py-1"
                >
                  {day}
                </div>
              ))}
            </div>
            {/* Calendar Days - Smaller */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((dateObj, idx) => {
                const isCurrentDay = isToday(dateObj.date);
                const isSelectedDay = isSameDay(dateObj.date, selectedDate);

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateClick(dateObj)}
                    className={`
                      w-9 h-8 flex items-center justify-center text-xs
                      transition-all duration-200 border rounded-sm
                      ${
                        !dateObj.isCurrentMonth
                          ? "text-gray-300"
                          : "text-gray-700"
                      }
                      ${
                        isCurrentDay
                          ? "border-primary text-primary"
                          : "border-none"
                      }
                      ${
                        isSelectedDay
                          ? "bg-primary! text-white! border-primary!"
                          : "hover:bg-background"
                      }
                    `}
                  >
                    {dateObj.day}
                  </button>
                );
              })}
            </div>
            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleToday}
                className="flex-1 py-1.5 text-xs text-primary hover:bg-background rounded-lg transition border border-background"
              >
                Today
              </button>
              <button
                onClick={handleTomorrow}
                className="flex-1 py-1.5 text-xs text-primary hover:bg-background rounded-lg transition border border-background"
              >
                Tomorrow
              </button>
              <button
                onClick={handleNextWeek}
                className="flex-1 py-1.5 text-xs text-primary hover:bg-background rounded-lg transition border border-background"
              >
                Next Week
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-200"></div>

          {/* Time Selection - Larger */}
          <div className="flex-1 md:max-w-50 w-full">
            <div className="mb-4">
              <div className="text-base font-semibold text-gray-700 mb-1">
                {dayNames[selectedDate.getDay()]}, {selectedDate.getDate()}{" "}
                {monthNames[selectedDate.getMonth()]}
              </div>
              <div className="text-xs text-gray-500">Select a time slot</div>
            </div>
            {/* Time slots with scroll */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 max-h-70 overflow-y-auto pr-1">
              {times.map(time => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`
                    w-full flex justify-center items-center py-1 px-4 text-sm rounded-lg 
                    transition border cursor-pointer
                    ${
                      selectedTime === time
                        ? "bg-primary text-white! border-primary"
                        : "text-gray-700 border-background hover:bg-background hover:border-primary"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
