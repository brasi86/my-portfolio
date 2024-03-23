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
    px-4
    min-h-screen
    max-sm:min-h-svh
    bg-[#1e1e1e]"
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
            md:max-w-2xl
            text-center
            md:text-xl"
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
             max-sm:leading-[4rem]
            tracking-wide
            absolute
            bottom-4
            opacity-10
            md:-left-2
            -left-1
            text-[4rem]
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
