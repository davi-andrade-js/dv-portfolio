"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTheme(localStorage.theme);
    if (localStorage.theme === "light") {
      document.documentElement.classList.add("light");
      return;
    }
    if (localStorage.theme === "") {
      document.documentElement.classList.remove("light");
      return;
    }
  }, []);

  const setDarkMode = () => {
    document.documentElement.classList.remove("light");
    localStorage.theme = "";
    setTheme("");
  };

  const setLightMode = () => {
    document.documentElement.classList.add("light");
    localStorage.theme = "light";
    setTheme("light");
  };

  return (
    <>
      <div className="z-10 h-fit cursor-pointer">
        {theme === "light" ? (
          <Moon
            className={`animate-bg h-7 w-7 rounded-full transition-all md:animate-none md:hover:text-neutral-500 ${clicked && "active"}`}
            onClick={() => {
              setDarkMode(), setClicked(true);
            }}
          />
        ) : (
          <Sun
            className={`animate-bg h-7 w-7 rounded-full transition-all md:animate-none md:hover:text-neutral-500 ${clicked && "active"}`}
            onClick={() => {
              setLightMode(), setClicked(true);
            }}
          />
        )}
      </div>
    </>
  );
}
