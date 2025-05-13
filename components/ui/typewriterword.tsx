"use client";

import { motion } from "framer-motion";

type Props = {
  word: string;
  delay?: number;
  className?: string;
};

export const TypewriterWord: React.FC<Props> = ({ word, delay = 0.1, className }) => {
  return (
    <span className={`inline-block ${className}`}>
      {word.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * delay }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};
