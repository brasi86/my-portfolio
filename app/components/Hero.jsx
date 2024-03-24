import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-sm:px-6 sm:px-8 md:px-7 xl:px-7 2xl:px-6 min-h-[calc(100vh-theme(spacing.20))] max-sm:min-h-[calc(100svh-theme(spacing.20))] max-w-[1440px] mx-auto">
      <div className="">
        <div className=" space-y-1">
          <h1
            className="
            
            
            font-semibold
            text-[3rem]
            leading-[3rem]
            sm:text-[5rem]
            sm:leading-[4rem]
            md:text-[7.5rem]
            md:leading-[6.5rem]
            lg:text-[8.5rem]
            lg:leading-[7rem]
            xl:text-[8.5rem]
            xl:leading-[7.5rem]
            2xl:text-[12rem]
            2xl:leading-[10rem]
            

             text-[#1e1e1e]
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
            md:text-md
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
          max-w-[360px]
          sm:max-w-[450px]
          md:max-w-[500px]
          lg:max-w-[510px]
          xl:max-w-[600px]
          2xl:max-w-full
          "
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
