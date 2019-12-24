import React, { useState } from "react";
import AddFab from "../common/AddFab";
import CandiesGrid from "./CandiesGrid";

const Candies = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCandyId, setSelectedCandyId] = useState("");

  const handleClickOnPhoto = id => {
    setIsFormOpen(true);
    setSelectedCandyId(id);
  };

  return (
    <div>
      <CandiesGrid onSelect={handleClickOnPhoto} />
      <AddFab />
    </div>
  );
};

export default Candies;
