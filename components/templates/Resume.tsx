"use client";

import Image from "next/image";
import { AuroraText } from "../ui/AuroraText";
import Link from "next/link";

type ProjectCardProps = {
  name: string;
  imageSrc: string;
  link: string;
};

const ProjectCard = ({ name, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4 items-center rounded-2xl p-4 h-65 sm:h-90 md:h-110  justify-between">
      <p className="font-semibold text-lg">{name}</p>
      <Link
        href={link}
        className="w-full h-full overflow-hidden rounded-xl border"
      >
        <Image
          src={imageSrc}
          alt={name}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </Link>
    </div>
  );
};

const Resume = () => {
  const projects = [
    {
      name: "MelkToday",
      imageSrc: "/images/project-1.png",
      link: "http://melktoday.ir",
    },
    {
      name: "Sarvestan",
      imageSrc: "/images/project-2.png",
      link: "http://sarvestan.app",
    },
      {
      name: "Caresync",
      imageSrc: "/images/project-4.png",
      link: "https://care-sync-appwrite.vercel.app/patient/68ec1c8a000c77105756/register",
    },
    {
      name: "Kado-UI library",
      imageSrc: "/images/project-3.jpg",
      link: "http://melktoday.ir",
    },
  ];

  return (
    <section id="projects" className="mt-6">
      <div className="flex flex-col items-center justify-center space-y-6">
        <p className="text-4xl font-bold text-center">
          Check out my <br /> latest{" "}
          <AuroraText className="bg-gradient-to-r from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            work
          </AuroraText>
        </p>

        <div className="grid grid-cols-1 gap-6 w-full max-w-6xl px-4">
          {projects.map((project) => (
            <ProjectCard
            link={project.link}
              key={project.name}
              name={project.name}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
