"use client";
import { motion } from "framer-motion";

export default function AnimatedStroke() {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      stroke: "rgba(234, 255, 150, 0)",
    },
    visible: {
      pathLength: 1,
      stroke: "rgba(234, 255, 150, 1)",
    },
  };

  return (
    <motion.svg
      viewBox="0 0 280 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-[75%] -z-10 h-[0.58] w-full rotate-3 stroke-accent"
      preserveAspectRatio="none"
    >
      <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M1.79004 37.0356C90.9647 2.06618 136.519 0.0760923 142.655 2.55589C148.791 5.03569 104.291 24.5357 103.291 27.5357C102.291 30.5357 173.427 8.51595 277.291 10.0357"
        strokeWidth="3.5"
        strokeLinecap="round"
        transition={{
          //   delay: 1.5,
          default: { duration: 2, ease: "easeInOut" },
          stroke: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
}
