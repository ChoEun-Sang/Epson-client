import WeeklyCalendar from "./WeeklyCalendar";

function DateSection() {
  return (
    <section>
      <div className="h-[73px] pt-8 pb-2">
        <h2 className="title2">일정</h2>
      </div>
      <WeeklyCalendar />
    </section>
  );
}

export default DateSection;
