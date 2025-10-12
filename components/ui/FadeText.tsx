"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FadeTextProps {
  sentences: string[];
  displayTime?: number; // how long each sentence stays visible (ms)
  transitionTime?: number; // fade in/out duration (s)
}

export function FadeText({
  sentences,
  displayTime = 2500,
  transitionTime = 0.6,
}: FadeTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, displayTime + transitionTime * 1000 * 2);
    return () => clearInterval(interval);
  }, [sentences.length, displayTime, transitionTime]);

  return (
    <div className="text-white text-xl sm:text-2xl md:text-4xl font-bold overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={sentences[index]}
          initial={{ opacity: 0, x: -40 }} // start slightly left
          animate={{ opacity: 1, x: 0 }} // move to center
          exit={{ opacity: 0, x: 40 }} // fade out to right
          transition={{ duration: transitionTime, ease: "easeInOut" }}
        >
          {sentences[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
