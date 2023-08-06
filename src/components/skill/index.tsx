"use client";

import { motion } from "framer-motion";
import React from "react";

export interface ISkill {
  children: React.ReactNode;
  title: string;
}

export default function Skill({ children, title }: ISkill) {
  return (
    <motion.div
      whileHover={{
        rotate: 360,
        transition: { duration: 1 },
      }}
      title={title}
      className="flex  h-40 w-40 items-center justify-center rounded-full bg-gray-800 text-6xl text-white md:h-32 md:w-32"
    >
      {children}
    </motion.div>
  );
}
