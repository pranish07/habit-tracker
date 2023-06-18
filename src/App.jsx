import React, { useState } from "react";
import { ArchivePage } from "./components/ArchivePage";
import { ProductListing } from "./components/ProductListing";
// import { ProductListing } from "./ProductListing";
import {habits} from "./data"

export const App = () => {
  const [habitsData, setHabitsData] = useState(habits);

  return (
    <div>
      <h1>Habit Tracker</h1>
      <ProductListing habitsData={habitsData} setHabitsData={setHabitsData} />
      <ArchivePage habitsData={habitsData} />
    </div>
  );
};
