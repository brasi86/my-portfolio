import Image from "next/image";
import { SKILLS, SKILLS_P } from "../constants";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  const [skills, setSkills] = useState("all");

  return (
    <section
      id="projects"
      className="
    flex
    lg:items-center
    relative
    md:px-2
    min-h-screen
    max-sm:min-h-[calc(100svh-theme(spacing.20))]
    bg-[url('/bg-black.svg')]"
    >
      <div
        className="
      max-w-[1440px]
      flex 
      flex-col
      lg:flex-row
      w-full
      gap-10
      lg:items-center
      lg:justify-around
      lg:mx-auto
      py-12"
      >
        <div
          onMouseLeave={() => setSkills("all")}
          className="flex px-6 flex-col lg:gap-3 opacity-90"
        >
          {SKILLS.map((skill) => (
            <button
              onMouseEnter={() =>
                setSkills((prev) => (prev === skill.key ? "all" : skill.key))
              }
              key={skill.key}
              className="
              text-left
              uppercase
              font-semibold
              relative
            text-white
              text-4xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
              py-1
              lg:py-3
              lg:px-2
              before:absolute
            before:bg-[#0e0e0e]
              before:w-0
              before:h-full
              before:-z-10
              before:top-0
              before:left-0
              before:opacity-80
              hover:before:w-full
              before:duration-300
              before:rounded-l-2xl
              ease-in-out
              "
            >
              <div className="flex gap-2 items-center">
                <h3>{skill.label}</h3>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
        <div>
          {SKILLS_P.map((p) => {
            if (skills === "All" || skills === p.key) {
              return (
                <div className=" px-6 flex flex-col gap-4" key={p.key}>
                  <h3
                    className="
                  text-2xl
                  text-white
                  uppercase
                  font-semibold"
                  >
                    {p.title}
                  </h3>
                  <p
                    className="
                    tracking-wider
                    leading-relaxed
                    max-w-md
                    xl:max-w-xl
                   
                    xl:min-w-1/2
                  text-white
                    opacity-90
                    sm:text-xl"
                  >
                    {p.label}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <h2
          className="
          text-white
            tracking-wide
            absolute
            bottom-0
            opacity-10
            md:-left-2
            -left-1
            text-[3.5rem]
            sm:text-[6rem]
            md:text-[7rem]
            lg:text-[10rem]
            xl:text-[12em]"
        >
          Projects.
        </h2>
      </div>
    </section>
  );
}
