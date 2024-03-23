export default function Skills() {
  return (
    <section
      id="skills"
      className="
    flex
    lg:items-center
    relative
    px-2
    min-h-screen
    max-sm:min-h-svh
    bg-[url('/bg.svg')]"
    >
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <h3
          className="
        text-xl
        font-semibold
        lg:text-3xl
        "
        >
          We Can Work Togheter
        </h3>
        <h2
          className="
      text-[#1e1e1e]
        text-4xl
        text-center
        lg:text-left
        md:text-7xl
        lg:text-9xl
        font-bold"
        >
          MY SKILLS AT <br />
          YOUR SERVICE.
        </h2>
        <p
          className="
        max-w-sm
        lg:max-w-full
        text-center"
        >
          NextJS, ReactJS, NodeJS, Tailwind CSS, Bootstrap, Firebase, MongoDB,
          MySQL, Wordpress, Shopify and more...
        </p>
      </div>
      <h2
        className="
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
        Skills.
      </h2>
    </section>
  );
}
