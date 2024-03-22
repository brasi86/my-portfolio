import Image from "next/image";
import { SKILLS, SKILLS_P } from "../constants";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [skills, setSkills] = useState("all");

  return (
    <section
      id="about"
      className="
    flex
    lg:items-center
    relative
    md:px-2
    min-h-screen
    max-sm:min-h-svh
    bg-[url('/bg-black.svg')]"
    >
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h3
          className="
            tracking-wider
          text-white
            opacity-90
            text-2xl
            font-semibold
            lg:text-3xl"
        >
          Minimalism First
        </h3>
        <p
          className="
            opacity-90
             tracking-wider
             leading-relaxed
            text-white
            max-w-xs
            md:max-w-xl
            text-center"
        >
          Explorer of new horizons, enthusiastic about applying my determination
          and rapid learning ability. Constant seeker of challenges, eager to
          immerse myself in a new professional perspective that has thus far
          only proven to be a passion, and to absorb knowledge to grow and
          become increasingly effective.
        </p>
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
        About Me.
      </h2>
      <div
        className="
      absolute
      text-xs
      py-1
      text-white
      opacity-90
      md:text-[#1e1e1e]
      md:py-2
      bottom-0
      left-0
      w-full
      text-center
      md:bg-[url('/bg.svg')]"
      >
        Punk Is Not Dead - L. &copy; {new Date().getFullYear()}
      </div>
    </section>
  );
}
