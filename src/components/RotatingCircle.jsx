import React from "react";
import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiRedux, SiNextdotjs } from "react-icons/si";


const RotatingCircle = () => {
  // const items = ["HTML", "CSS", "JS", "React", "Redux", "Next.js"]; // Text for each circle
  const items = [
    { label: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { label: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { label: "JS", icon: <FaJs size={24} color="#F7DF1E" /> },
    { label: "React", icon: <FaReact size={24} color="#61DAFB" /> },
    { label: "Redux", icon: <SiRedux size={24} color="#764ABC" /> },
    { label: "Next.js", icon: <SiNextdotjs size={24} color="#000000" /> },
    { label: "Next.js", icon: <SiNextdotjs size={24} color="#000000" /> },
  ];

  const radius = 150;

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="relative w-[300px] h-[300px]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 55,
          ease: "linear",
        }}
      >
        {/* Center dot */}
        <div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

        {items.map(({ label, icon }, i) => {
          const angle = (360 / items.length) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="w-30 h-30 bg-blue-500 text-white flex flex-col items-center justify-center rounded-full absolute text-2xl font-normal shadow-md"
              style={{
                top: `calc(50% + ${y}px - 40px)`, // 40 = half of 80 (w-20,h-20)
                left: `calc(50% + ${x}px - 40px)`,
              }}
            >
              {icon}
              <span className="mt-1">{label}</span>
            </div>
          );
        })}

      </motion.div>
    </div>
  );
};

export default RotatingCircle;
