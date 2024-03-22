import { NAV_LINKS } from "../constants";

export default function Navbar() {
  return (
    <header className="px-8 py-4 max-w-[1440px] h-[80px] mx-auto">
      <div className="flex justify-between items-center gap-12">
        <div
          className="
        text-3xl
        font-bold
        relative 
        tracking-wide
        overflow-hidden       
        "
        >
          <h2
            className="text-3xl
            font-bold
            before:absolute
            before:content-['L.']
            before:w-full 
            before:h-full
            left-0
            before:-bottom-[100%]
            hover:-translate-y-full
            duration-300
            transition-all
            cursor-pointer
          "
          >
            L.
          </h2>
        </div>
        <nav className="mr-auto max-sm:mx-auto">
          <ul className="flex gap-4 font-semibold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                className="    
                relative
                tracking-wide
                before:absolute
                before:content-['']
                before:w-0 
                before:h-[2px]
                left-0
                before:bg-black 
                before:bottom-0
                hover:before:w-full
                before:duration-300
                before:rounded-xl
                ease-in-out
                hover:opacity-90"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </ul>
        </nav>
        <p className=" tracking-wide font-semibold">
          {new Date().getFullYear()}
        </p>
      </div>
      <hr className=" border mt-3 border-[#424242]" />
    </header>
  );
}
