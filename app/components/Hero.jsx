import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-5 min-h-[calc(100vh-theme(spacing.20))] max-sm:min-h-[calc(100svh-theme(spacing.20))] max-w-[1440px] mx-auto">
      <div className="">
        <div className=" space-y-1">
          <h1
            className="
            leading-[3rem] 
            text-[3.5rem]
            md:leading-[7rem]
            lg:leading-[10rem]
            sm:text-[6rem]
            sm:leading-[5rem]
            md:text-[8rem]
            lg:text-[10rem]
            xl:text-[12rem]
            landscape:sm:text-[3rem]
            landscape:sm:leading-[2.8rem]

            landscape:md:text-[6rem]
            landscape:md:leading-[5rem]

            landscape:lg:leading-[9.5rem]
            landscape:lg:text-[12rem]
            
            "
          >
            I&apos;am a<br />
            Full Stack <br />
            Dev.
          </h1>
          <h3
            className="
            px-1
            md:px-4
            text-md
            md:text-xl
            tracking-wide
            font-semibold
            opacity-80
          "
          >
            BASED IN PESCARA, ITALY
          </h3>
        </div>
        <h2
          className="
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
            xl:text-[12rem]"
        >
          Hello, There.
        </h2>
        <Image
          className="absolute
          bottom-0
          right-0
          rounded-bl-full
          max-sm:max-w-[340px]
          max-md:max-w-[550px]
          max-lg:max-w-[650px]
          landscape:lg:max-w-[700px]
          landscape:sm:max-w-full"
          src="/lae.png"
          alt="lae"
          width={650}
          height={100}
          priority
        />
      </div>
    </section>
  );
}
