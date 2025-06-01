
import { motion } from "framer-motion";
import { FcReading } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiStumpRegrowth } from "react-icons/gi";
import { GiBrainstorm } from "react-icons/gi";

const RotatingCircle = () => {
  // const items = ["HTML", "CSS", "JS", "React", "Redux", "Next.js"]; // Text for each circle
  const items = [
    { icon: <FcReading size={100} color="#E34F26"/> },
    { icon: <FcComboChart size={100} color="#1572B6" /> },
    { icon: <FaRegHandshake size={100} color="#F7DF1E" /> },
    { icon: <MdOutlineSettingsSuggest size={100} color="#61DAFB" /> },
    { icon: <HiOutlineLightBulb size={100} color="#764ABC" /> },
    { icon: <GiStumpRegrowth size={100} color="#97D552" /> },
    { icon: <GiBrainstorm size={100} color="#FF8CB7" /> },
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
        {/* <div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" /> */}

        {items.map(({ label, icon }, i) => {
          const angle = (360 / items.length) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="w-30 h-30 border border-amber-300 text-white flex flex-col items-center justify-center rounded-full absolute text-[16px] font-normal shadow-md"
              style={{
                top: `calc(50% + ${y}px - 40px)`, // 40 = half of 80 (w-20,h-20)
                left: `calc(50% + ${x}px - 40px)`,
              }}
            >
              {icon}
            </div>
          );
        })}

      </motion.div>
    </div>
  );
};

export default RotatingCircle;
