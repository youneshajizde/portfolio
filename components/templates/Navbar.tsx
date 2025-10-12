"use client";

import { SendIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <section className="gap-3 w-[320px] fixed top-5 h-15 flex items-stretch z-50">
      <div className="aspect-square hidden h-full rounded-full overflow-hidden relative flex-shrink-0">
        <Image
          alt="avatar"
          src="/images/avatar.jpg"
          fill
          className="object-cover"
        />
      </div>

      <div
        className="
    w-full h-full f-align justify-between 
    py-1.5 px-1.5 rounded-full font-medium 
    bg-gray-200/20 backdrop-blur-md border border-white/30
  "
      >
        <div className="aspect-square h-full rounded-full overflow-hidden relative flex-shrink-0">
          <Image
            alt="avatar"
            src="/images/avatar.jpg"
            fill
            className="object-cover"
          />
        </div>
        <p className="hidden text-sm">Younes</p>

        <div className="f-align gap-3 text-sm ">
          <p></p>
          <p>About</p>
          <p>Projects</p>
          <button
            onClick={() => router.push("")}
            className="f-align gap-1.5 btn btn-gradient shadow-sm text-white "
          >
            Lets talk!
            <span>
              <SendIcon size={17} color="white" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
