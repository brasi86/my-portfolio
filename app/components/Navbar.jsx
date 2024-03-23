"use client";
import { NAV_LINKS } from "../constants";
import { gsap } from "gsap";
import { useRef, useState } from "react";

export default function Navbar() {
  const menu = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const tl = gsap.timeline();

  if (menu.current) {
    openMenu
      ? tl
          .to(".rotate1", {
            x: 2,
            rotate: 50,
            transformOrigin: "29%",
            duration: 0.1,
            ease: "power1.inOut",
          })
          .to(".rotate2", {
            x: 2,
            rotate: -50,
            transformOrigin: "29%",
            duration: 0.1,
            ease: "power1.inOut",
          })
          .to(menu.current, {
            xPercent: -100,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            duration: 0.4,
            ease: "power2.inOut",
          })
      : tl
          .to(".rotate1", {
            rotate: 0,
            x: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .to(".rotate2", {
            rotate: 0,
            x: 0,
            ease: "power1.inOut",
            duration: 0.1,
          })
          .to(menu.current, {
            xPercent: 0,
            borderBottomLeftRadius: 200,
            borderTopLeftRadius: 200,
            duration: 0.4,
            ease: "power2.inOut",
          });
  }

  return (
    <header
      className="px-8 py-4 max-w-[1440px] h-[80px] mx-auto
    "
    >
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

        <nav
          ref={menu}
          className="mr-auto
        max-sm:fixed
        max-sm:h-svh
        max-sm:w-full
        max-sm:top-0
        max-sm:left-[100%]
        max-sm:bg-[url('/bg-black.svg')]
        max-sm:text-4xl
      max-sm:text-white
        flex
        justify-center
        items-center
        z-50
         
        "
        >
          <ul className="flex gap-4 font-semibold max-sm:flex-col">
            {NAV_LINKS.map((link) => (
              <a
                onClick={() => setOpenMenu(false)}
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
                max-sm:before:bg-white
                before:-bottom-1
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

        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="
          w-14
          h-14
          rounded-full
          flex
          items-center
          justify-center
          font-semibold
          uppercase
          sm:hidden
          max-sm:fixed
          z-50
          right-5
          text-white
          bg-[#1e1e1e]
          "
        >
          <div className="flex flex-col space-y-2">
            <span className="hamburger rotate1"></span>
            <span className="hamburger rotate2"></span>
          </div>
        </div>
        <p className="max-sm:hidden tracking-wide font-semibold">
          {new Date().getFullYear()}
        </p>
      </div>
      <hr className="max-sm:hidden border mt-3 border-[#424242]" />
    </header>
  );
}
