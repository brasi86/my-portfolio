"use client";
import { useEffect, useState } from "react";

export default function GoTop() {
  const [goTop, setGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollTopThreshold = 200;

      if (scrollTop > scrollTopThreshold) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {goTop && (
        <a href="#home">
          <div
            className="
        fixed
        bottom-10
        right-10
        border
        shadow-lg
        rounded-full
        w-20
        h-20
        flex
        flex-col
        justify-center
        items-center
        text-white
        mix-blend-difference"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
              />
            </svg>
          </div>
        </a>
      )}
    </>
  );
}
