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
    max-sm:min-h-lvh
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
          className="flex px-2 flex-col gap-2 opacity-90"
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
              text-[1.95rem]
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
              py-1
              px-2
              lg:py-3
             
              
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
              <div
                className={
                  skills === skill.key ? "active-skill" : "no-active-skill"
                }
              >
                <h3>{skill.label}</h3>
                <span></span>
              </div>
            </button>
          ))}
        </div>
        <div>
          {SKILLS_P.map((p) => {
            if (skills === "All" || skills === p.key) {
              return (
                <div className=" px-4 flex flex-col gap-4" key={p.key}>
                  <h3 className="active-label">{p.title}</h3>
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
            text-[4rem]
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
