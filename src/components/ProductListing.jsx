import React, { useState } from "react";
import { ModalBtn } from "./ModalBtn";

export const ProductListing = ({ habitsData, setHabitsData }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleArchiveClick = (habit) => {
    const updatedHabits = habitsData.filter((h) => h.id !== habit.id);
    setHabitsData(updatedHabits);
    setSelectedHabit(null);
  };

  const handleDeleteClick = (habit) => {
    const updatedHabits = habitsData.filter((h) => h.id !== habit.id);
    setHabitsData(updatedHabits);
    setSelectedHabit(null);
  };

  const handleEditClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleUpdateHabit = (updatedHabit) => {
    const updatedHabits = habitsData.map((habit) =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    );
    setHabitsData(updatedHabits);
    setSelectedHabit(null);
  };

  return (
    <div>
      <ModalBtn
        onAddHabit={(newHabit) => setHabitsData([...habitsData, newHabit])}
        data={habitsData}
        onUpdateHabit={handleUpdateHabit}
        selectedHabit={selectedHabit}
      />

      {habitsData.map((habit) => (
        <div key={habit.id} onClick={() => handleHabitClick(habit)}>
          <h2>{habit.name}</h2>
          {selectedHabit && selectedHabit.id === habit.id && (
            <div>
              <h3 style={{color:"red"}}>Selected Habit: {selectedHabit.name}</h3>
              <p>
                Repeat: {selectedHabit.repeat} <br />
                Goal: {selectedHabit.goal} <br />
                Time of Day: {selectedHabit.timeOfDay} <br />
                Start Date: {selectedHabit.startDate}
              </p>
              <button onClick={() => handleDeleteClick(selectedHabit)}>
                Delete
              </button>
              <button onClick={() => handleEditClick(selectedHabit)}>
                Edit
              </button>
              <button onClick={() => handleArchiveClick(selectedHabit)}>
                Archive
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
