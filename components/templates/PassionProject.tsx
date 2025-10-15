"use client";

import { motion } from "framer-motion";
import React from "react";
import { FadeText } from "../ui/FadeText";

const PassionProject = () => {
  return (
    <section className="w-full mt-24">
      <div className="gradient-y sm:rounded-3xl w-full h-[270px] sm:h-[400px] lg:h-[500px] relative overflow-hidden">
        <div className="absolute w-7/8 left-1/2 -translate-x-1/2 top-5 sm:top-10">
          <FadeText
            sentences={[
              "I often think of how to implement...",
              "a project that can do everything...",
              "so I ended up with Maverick!",
            ]}
          />
        </div>

        <motion.div
          initial={{ y: 100, scale: 0.8, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="absolute w-full h-full bottom-0"
        >
          <video
            src="/images/maverick.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-7/8 h-3/4 rounded-t-3xl left-1/2 -translate-x-1/2 bottom-0 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PassionProject;
