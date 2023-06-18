import React from "react";

export const ArchivePage = ({ habitsData }) => {
  const archivedHabits = habitsData.filter((habit) => habit.archived);
  return (
    <div>
      <h2>Archived Habits</h2>
      {archivedHabits.map((habit) => (
        <div key={habit.id}>
          <h3>{habit.name}</h3>
          <p>
            Repeat: {habit.repeat} <br />
            Goal: {habit.goal} <br />
            Time of Day: {habit.timeOfDay} <br />
            Start Date: {habit.startDate}
          </p>
        </div>
      ))}
    </div>
  );
};
