import { DownloadIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { AuroraText } from "../ui/AuroraText";
import { WordRotate } from "../ui/WordRotate";
import Link from "next/link";

const Header = () => {
  return (
    <section className="f-center mt-16 sm:mt-5">
      <div className="text-center f-center flex-col">
        <div className="font-black text-3xl sm:text-4xl lg:text-5xl">
          <AuroraText className="bg-gradient-to-r from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            UNLOCK
          </AuroraText>{" "}
          YOUR{" "}
          <AuroraText className="bg-gradient-to-r from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            IDEAS
          </AuroraText>
          <br />
          WITH{" "}
          <AuroraText className="bg-gradient-to-r inline from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            ME
          </AuroraText>{" "}
          AS THE{" "}
          <WordRotate
            className=" font-black text-black dark:text-white"
            words={["DESIGNER", "DEVELOPER", "ENGINEER"]}
          />
        </div>
        <p className="text-sm sm:text-lg xl:text-xl font-medium text-gray-300 w-2/3 text-center mt-3">
          Participating in several projects either as a contributer or a team
          member.
        </p>
        <div className="mx-auto flex items-center gap-3 mt-6">
          <Link
            href={"http://www.linkedin.com/in/youneshajizade"}
            className="btn btn-transparent font-medium text-black rounded-full text-sm flex items-center gap-1.5"
          >
            <span className="text-[#1793d6]">My Linkedin</span>
            <LinkedinIcon className="text-[#1793d6]" size={18} />
          </Link>
          <button className="font-medium shadow-sm text-white rounded-full text-sm btn btn-gradient flex items-center gap-1.5 ">
            <span> My Resume</span>
            <DownloadIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
