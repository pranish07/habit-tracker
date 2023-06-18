import React, { useState, useEffect } from "react";
import { Button } from "@mui/base";
import { Box, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalBtn = ({ onAddHabit, onUpdateHabit, selectedHabit }) => {
  const [open, setOpen] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitRepeat, setHabitRepeat] = useState("daily");
  const [habitGoal, setHabitGoal] = useState("once");
  const [habitTimeOfDay, setHabitTimeOfDay] = useState("anytime");
  const [habitStartDate, setHabitStartDate] = useState("today");

  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    if (selectedHabit) {
        setEditingHabit(selectedHabit);
        setHabitName(selectedHabit.name);
        setHabitRepeat(selectedHabit.repeat);
        setHabitGoal(selectedHabit.goal);
        setHabitTimeOfDay(selectedHabit.timeOfDay);
        setHabitStartDate(selectedHabit.startDate);
    }
  }, [selectedHabit]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditingHabit(null);
    resetForm();
  };

  const resetForm = () => {
    setHabitName("");
    setHabitRepeat("daily");
    setHabitGoal("once");
    setHabitTimeOfDay("anytime");
    setHabitStartDate("today");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHabit = {
      id: editingHabit ? editingHabit.id : Date.now().toString(),
      name: habitName,
      repeat: habitRepeat,
      goal: habitGoal,
      timeOfDay: habitTimeOfDay,
      startDate: habitStartDate,
    };

    if (editingHabit) {
      onUpdateHabit(newHabit);
    } else {
      onAddHabit(newHabit);
    }

    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} autoComplete="off">
          <form onSubmit={handleSubmit}>
            <h2>{editingHabit ? "Edit Habit" : "New Habit"}</h2>
            {/* name */}
            <p>Name</p>
            <TextField
              type="text"
              id="outlined-basic"
              style={{ width: "100%" }}
              label="Name"
              value={habitName}
              onChange={(e) => setHabitName(e.target.value)}
            />

            <label htmlFor="repeat">Repeat</label>

            <select
              name="repeat"
              id="repeat"
              className="repeat-dropdown"
              onChange={(e) => setHabitRepeat(e.target.value)}
              value={habitRepeat}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <label htmlFor="goal">Goal</label>

            <select
              name="goal"
              id="goal"
              className="goal-dropdown"
              onChange={(e) => setHabitGoal(e.target.value)}
              value={habitGoal}
            >
              <option value="once">Once</option>
              <option value="twice">Twice</option>
              <option value="thrice">Thrice</option>
            </select>

            <br />
            <br />

            <label htmlFor="timeOfDay">Time of day</label>
            <select
              name="timeOfDay"
              id="timeOfDay"
              className="timeOfDay-dropdown"
              onChange={(e) => setHabitTimeOfDay(e.target.value)}
              value={habitTimeOfDay}
            >
              <option value="anytime">Anytime</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>

            <label htmlFor="startDate">Start day</label>

            <select
              name="startDate"
              id="startDate"
              className="startDay-dropdown"
              onChange={(e) => setHabitStartDate(e.target.value)}
              value={habitStartDate}
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="the day after tomorrow">The day after Tomorrow</option>
            </select>
            <br />
            <br />
            <button type="submit">{editingHabit ? "Save" : "Create"}</button>
            <button onClick={handleClose}>Cancel</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
