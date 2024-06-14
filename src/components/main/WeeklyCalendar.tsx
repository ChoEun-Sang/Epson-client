import React, { useState, useEffect } from "react";

const WeeklyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const startOfWeek = (date: Date): Date => {
    const day = date.getDay();
    const diff = date.getDate() - day;
    return new Date(date.setDate(diff));
  };

  const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-GB", { day: "numeric" }).format(date);
  };

  const getDayName = (date: Date): string => {
    return new Intl.DateTimeFormat("ko-KR", { weekday: "short" }).format(date);
  };

  const renderDays = (): JSX.Element[] => {
    const days: JSX.Element[] = [];
    const startDate = startOfWeek(new Date(currentDate));
    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      const isToday = day.toDateString() === new Date().toDateString();
      const isSunday = day.getDay() === 0;
      const isSaturday = day.getDay() === 6;

      days.push(
        <div
          key={i}
          className={`flex flex-col items-center p-2 ${
            isToday ? "bg-black text-white rounded-[18px] w-[42px] h-16" : ""
          }`}
        >
          <div
            className={`text-sm ${
              isToday
                ? isSaturday
                  ? "text-blue-500"
                  : "font-bold"
                : isSunday
                ? "text-red-500"
                : isSaturday
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            {getDayName(day)}
          </div>
          <div
            className={`text-lg ${
              isToday
                ? isSaturday
                  ? "text-blue-500"
                  : "font-bold"
                : isSunday
                ? "text-red-500"
                : isSaturday
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          >
            {formatDate(day)}
          </div>
        </div>
      );
    }
    return days;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full max-w-2xl">{renderDays()}</div>
    </div>
  );
};

export default WeeklyCalendar;
