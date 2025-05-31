## React icons
1. Go to the Link below:
   [React Icons](https://react-icons.github.io/react-icons/)
2. Open terminal ` ctrl + ` `tilda or back tick ` in VS Code and type the code below:
   ```
   npm install react-icons --save
   ```
3. Select icon and import the icon component where needed, for example:
   ```
   import { FaBeer } from 'react-icons/fa';

   class Question extends React.Component {
     render() {
          return <h3> Lets go for a <FaBeer />? </h3>
     }
   }
   ```
## Rotating Circle
A simple `React` component with animated rotating `<div>` elements using [Framer Motion](https://motion.dev/docs/react-motion-component), a powerful animation library for React.
1. ### Installation:
   ```
   npm install framer-motion
   ```
2. ### React Component: Divs Rotating in a Circle
   ```
   import React from "react";
   import { motion } from "framer-motion";

  const RotatingCircle = () => {
  const numDivs = 6; // Number of orbiting divs
  const radius = 100; // Distance from the center

  const divs = Array.from({ length: numDivs });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="relative w-[300px] h-[300px]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {divs.map((_, i) => {
          const angle = (360 / numDivs) * i;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className="w-10 h-10 bg-blue-500 rounded-full absolute"
              style={{
                top: `calc(50% + ${y}px - 20px)`,
                left: `calc(50% + ${x}px - 20px)`,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default RotatingCircle;

   ```
3. ### Optional:

You can add a central “sun” div inside the motion.div if you'd like a visible center:
