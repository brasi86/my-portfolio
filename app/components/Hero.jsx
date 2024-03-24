import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-5 min-h-[calc(100vh-theme(spacing.20))] max-sm:min-h-[calc(100lvh-theme(spacing.40))] max-w-[1440px] mx-auto">
      <div className="">
        <div className=" space-y-1">
          <h1
            className="
            font-semibold
            text-[3rem]
            leading-[3rem]

            md:text-[6rem]
            md:leading-[5rem]
            
            lg:text-[10rem]
            lg:leading-[10rem]
       
            xl:text-[12rem]
            xl:leading-[11rem]

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
          max-sm:max-w-[360px]
          max-md:max-w-[550px]
          max-lg:max-w-[550px]
          landscape:lg:max-w-[600px]
          landscape:sm:max-w-[300px]"
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
