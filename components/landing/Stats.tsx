// export default function Stats() {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 space-y-6 md:space-x-8 md:flex-row md:space-y-0">
//       <div className="stats-bg">
//         <div className="stats">10+</div>
//         <div className="font-semibold">Years of Experience</div>
//       </div>
//       <div className="stats-bg">
//         <div className="stats">12k</div>
//         <div className="font-semibold">Happy Clients</div>
//       </div>
//       <div className="stats-bg">
//         <div className="stats">4.8</div>
//         <div className="font-semibold">Overall Rating</div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = React.useState(from);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      });

      let start = from;
      const increment = (to - from) / (duration * 60); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [from, to, isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">
      {to % 1 === 0 ? Math.floor(count) : count.toFixed(1)}+
    </motion.div>
  );
};

export default function Stats() {
  const stats = [
    { value: 10, label: "Years of Experience" },
    { value: 12000, label: "Happy Clients" },
    { value: 4.8, label: "Overall Rating" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <Counter from={stat.value * 0.7} to={stat.value} duration={2} />
              <div className="mt-4 text-lg font-semibold text-gray-700">
                {stat.label}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mt-4 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
