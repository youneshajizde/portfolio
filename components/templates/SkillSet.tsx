import Image from "next/image";
import { AuroraText } from "../ui/AuroraText";

const squares = [
  {
    top: 15,
    left: 10,
    gradient: "linear-gradient(135deg, #f9fafb, #e5e7eb)", // very light gray
    alt: "Next.js",
    imgSrc: "/images/nextjs.svg",
  },

  {
    top: 50,
    left: 10,
    gradient: "linear-gradient(135deg, #e5e7eb, #cbd5e1)", // slightly darker light gray
    alt: "PostgreSQL",
    imgSrc: "/images/postgresql.svg",
  },
  {
    top: 80,
    left: 75,
    gradient: "linear-gradient(135deg, #f9fafb, #d6d9dd)", // light with subtle bluish tint
    alt: "Node.js",
    imgSrc: "/images/nodejs.svg",
  },
  {
    top: 80,
    left: 15,
    gradient: "linear-gradient(135deg, #f0f1f3, #e0e3e7)", // soft light gray
    alt: "Figma",
    imgSrc: "/images/figma.svg",
  },
  {
    top: 50,
    left: 81,
    gradient: "linear-gradient(135deg, #f7fafc, #e2e8f0)", // very pale blue-gray
    alt: "React",
    imgSrc: "/images/react.svg",
  },
  {
    top: 15,
    left: 80,
    gradient: "linear-gradient(135deg, #f9fafb, #dde1e6)",
    alt: "TypeScript",
    imgSrc: "/images/typescript.svg",
  },
];

const SkillSet = () => {
  return (
    <section
      className=" mx-auto relative flex items-center justify-center mt-6 h-[700px]"
      style={{ "--square-size": "60px" } as React.CSSProperties}
    >
      <div className="flex flex-col items-center space-y-3">
        <p className="text-3xl md:text-4xl font-bold z-10 relative text-center max-w-xl">
          <AuroraText className="bg-gradient-to-r from-[#1793d6] to-[#47b8f6] bg-clip-text text-transparent">
            Dedication
          </AuroraText>{" "}
          is the key
        </p>
        <Image
          alt="person"
          style={{
            animation: "floatUpDown 3s ease-in-out infinite",
          }}
          src="/images/yoga.png"
          className="size-55"
          width={600}
          height={600}
        />
      </div>
      {squares.map(({ top, left, gradient, imgSrc, alt }, i) => (
        <div
          key={i}
          className="absolute rounded-md flex items-center justify-center shadow-lg"
          style={{
            width: "var(--square-size)",
            height: "var(--square-size)",
            top: `${top}%`,
            left: `${left}%`,
            background: gradient,
            animation: `float${i % 3} 3.5s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={imgSrc}
            alt={alt}
            className="w-8 h-8 object-contain"
            draggable={false}
            width={300}
            height={300}
          />
        </div>
      ))}

      <style>{`
        :root {
          --square-size: 60px;
        }
        @media (max-width: 640px) {
          :root {
            --square-size: 40px;
          }
        }

        @keyframes float0 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-15px); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default SkillSet;
