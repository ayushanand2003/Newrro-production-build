"use client";

import { motion } from "framer-motion";
import React from "react";

type TypewriterTextProps = {
  textParts: (string | JSX.Element)[];
  delay?: number;
  className?: string;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  textParts,
  delay = 0.05,
  className = "",
}) => {
  return (
    <h2 className={`text-5xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight ${className}`}>
      {textParts.map((part, partIndex) => {
        if (typeof part === "string") {
          return part.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${partIndex}-${charIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (partIndex + charIndex) * delay }}
            >
              {char}
            </motion.span>
          ));
        } else {
          return (
            <motion.span
              key={`jsx-${partIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: partIndex * delay }}
              className="inline-block"
            >
              {part}
            </motion.span>
          );
        }
      })}
    </h2>
  );
};
