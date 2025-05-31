import React from "react";
import { motion } from "framer-motion";

const RotatingDivs = () => {
  const divs = [0, 1, 2]; // You can add more

  return (
    <div className="flex gap-4 justify-center items-center h-screen bg-gray-100">
      {divs.map((_, i) => (
        <motion.div
          key={i}
          className="w-24 h-24 rounded-xl bg-blue-500"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2 + i,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default RotatingDivs;
