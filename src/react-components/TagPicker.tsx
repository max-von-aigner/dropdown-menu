import React, { useState, useEffect } from "react";
import TagCardLeft from "@/react-components/TagCardLeft";
import TagCardRight from "@/react-components/TagCardRight";
import { motion } from "framer-motion";

const TagPicker = () => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const [orderedDeselectedBadges, setOrderedDeselectedBadges] = useState<
    string[]
  >([
    "Basketball",
    "Football",
    "Tennis",
    "Volleyball",
    "Baseball",
    "American Football",
    "Cricket",
    "Table Tennis", // Add more sports if needed
  ]);

  const handleBadgeSelect = (badgeName: string) => {
    if (!selectedBadges.includes(badgeName)) {
      setSelectedBadges([...selectedBadges, badgeName]);
      // Remove badge from the orderedDeselectedBadges list when it's selected
      setOrderedDeselectedBadges((prevBadges) =>
        prevBadges.filter((badge) => badge !== badgeName)
      );
    }
  };

  const handleBadgeDeselect = (badgeName: string) => {
    setSelectedBadges((prevBadges) =>
      prevBadges.filter((badge) => badge !== badgeName)
    );
    setOrderedDeselectedBadges((prevBadges) => [...prevBadges, badgeName]);
    console.log("badge deselected");
  };

  console.log("TagPicker rendered!");

  return (
    <main className="h-screen w-full grid grid-cols-10 grid-rows-8 gap-16 relative bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {/* <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      > */}
      <TagCardLeft
        onBadgeSelect={handleBadgeSelect}
        onBadgeDeselect={handleBadgeDeselect}
        selectedBadges={selectedBadges}
        orderedDeselectedBadges={orderedDeselectedBadges} // Pass the orderedDeselectedBadges to TagCardLeft
      />
      {/* </motion.div> */}
      <TagCardRight
        selectedBadges={selectedBadges}
        onBadgeDeselect={handleBadgeDeselect}
      />
    </main>
  );
};

export default TagPicker;
