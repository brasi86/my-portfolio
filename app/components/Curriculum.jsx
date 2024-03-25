import { CURRICULUM } from "../constants";
import BadgeCurriculum from "./BadgeCurriculum";

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="
      flex
      lg:items-center
      relative
      px-4
      min-h-screen
      max-sm:min-h-svh
      bg-[url('/bg-white.svg')]"
    >
      <div className="flex flex-col md:flex-row justify-center mx-auto items-center gap-8 md:gap-20 max-w-4xl">
        <div className="flex flex-col gap-8 max-w-xs md:max-w-sm justify-center items-center">
          {CURRICULUM.slice(0, 3).map((c) => (
            <BadgeCurriculum key={c.key} img={c.img} desc={c.desc} />
          ))}
        </div>
        <div className="flex flex-col gap-8 max-w-xs md:max-w-sm justify-center items-center">
          {CURRICULUM.slice(3).map((c) => (
            <BadgeCurriculum key={c.key} img={c.img} desc={c.desc} />
          ))}
        </div>
      </div>
      <h2
        className="
              tracking-wide
              absolute
              bottom-0
              opacity-10
              md:-left-2
              -left-1
              text-[3rem]
              sm:text-[6rem]
              md:text-[7rem]
              lg:text-[10rem]
              xl:text-[12em]"
      >
        Curriculum.
      </h2>
    </section>
  );
}
