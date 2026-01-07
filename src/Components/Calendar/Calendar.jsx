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
    "December",
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
    "8:30 PM",
    "9:00 PM",
  ];

  const getDaysInMonth = (date) => {
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
        date: new Date(year, month - 1, prevMonthDays - i),
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(year, month + 1, i),
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

  const handleDateClick = (dateObj) => {
    setSelectedDate(dateObj.date);
    console.log("Selected Date:", dateObj.date.toDateString());
  };

  const handleTimeClick = (time) => {
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

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="flex flex-wrap gap-3 items-center bg-white rounded-2xl w-full  p-5">
      <div className="bg-white rounded-2xl p-5 w-full">
        <div className="flex gap-6">
          {/* Calendar Section */}
          <div className="flex-1">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex gap-2">
                <Button
                  onClick={handlePrevMonth}
                  className="flex items-center justify-center w-8 h-8 p-0 rounded-sm border border-[#F4F2FF] hover:border-[#9A85FF] transition"
                  icon={
                    <LeftOutlined style={{ fontSize: "12px", color: "#666" }} />
                  }
                />
                <Button
                  onClick={handleNextMonth}
                  className="flex items-center justify-center w-8 h-8 p-0 rounded-sm border border-[#F4F2FF] hover:border-[#9A85FF] transition"
                  icon={
                    <RightOutlined
                      style={{ fontSize: "12px", color: "#666" }}
                    />
                  }
                />
              </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((dateObj, idx) => {
                const isCurrentDay = isToday(dateObj.date);
                const isSelectedDay = isSameDay(dateObj.date, selectedDate);

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateClick(dateObj)}
                    className={`
                    aspect-square flex items-center justify-center text-sm
                    transition-all duration-200 border rounded-sm
                    ${
                      !dateObj.isCurrentMonth
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                    ${
                      isCurrentDay
                        ? "border-[#9A85FF] text-[#9A85FF]"
                        : "border-none"
                    }
                    ${
                      isSelectedDay
                        ? "bg-[#9A85FF]! text-white! border-[#9A85FF]!"
                        : "hover:bg-[#F4F2FF]"
                    }
                  `}
                  >
                    {dateObj.day}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleToday}
                className="flex-1 py-2 text-sm text-[#9A85FF] hover:bg-[#F4F2FF] rounded-lg transition border border-[#EAE8FF]"
              >
                Today
              </button>
              <button
                onClick={handleNextWeek}
                className="flex-1 py-2 text-sm text-[#9A85FF] hover:bg-[#F4F2FF] rounded-lg transition border border-[#EAE8FF]"
              >
                Next Week
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-200"></div>

          {/* Time Selection */}
          <div className="w-32">
            <div className="mb-4">
              <div className="text-sm font-semibold text-gray-700">
                {dayNames[selectedDate.getDay()]} {selectedDate.getDate()}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`
                  w-full py-2 flex justify-center text-sm text-left rounded-lg transition border border-[#EAE8FF] cursor-pointer
                  ${
                    selectedTime === time
                      ? "bg-[#9A85FF] text-white! border-[#9A85FF]"
                      : "text-black hover:bg-[#F4F2FF] hover:border-[#9A85FF]"
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
