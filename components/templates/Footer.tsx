import React from "react";
import { AuroraText } from "../ui/AuroraText";
import { TypingAnimation } from "../ui/TypingAnimation";

const Footer = () => {
  return (
    <section className="mt-10 f-center py-16 px-6 w-full">
      <div className="text-center space-y-4">
        <p className="text-2xl font-semibold tracking-tight">
          Crafted with 💻, ☕, and infinite{" "}
          <AuroraText className="bg-gradient-to-r from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            curiosity
          </AuroraText>
          .
        </p>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} — Built by a developer who loves clean
          code and better UX.
        </p>
        <TypingAnimation className="">
          “Code. Refactor. Repeat.”
        </TypingAnimation>
      </div>
    </section>
  );
};

export default Footer;
