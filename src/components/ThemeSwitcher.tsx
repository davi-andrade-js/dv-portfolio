"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const [bgOnHover, setBgOnHover] = useState(false);

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
      <div className="z-10 cursor-pointer">
        {theme === "light" ? (
          <Moon
            className={`w-fit hover:text-neutral-500 `}
            onClick={() => setDarkMode()}
            onMouseEnter={() => setBgOnHover(true)}
            onMouseLeave={() => setBgOnHover(false)}
          />
        ) : (
          // ${bgOnHover ? "rounded-full bg-stone-950 bg-opacity-15" : ""}
          // ${bgOnHover ? "rounded-full bg-stone-50 bg-opacity-20" : ""}
          <Sun
            className={`w-fit hover:text-neutral-500 `}
            onClick={() => setLightMode()}
            onMouseEnter={() => setBgOnHover(true)}
            onMouseLeave={() => setBgOnHover(false)}
          />
        )}
      </div>
    </>
  );
}

// toast(
//   `🌚 Esta é a versão beta. Troca de tema ainda não foi implementada.`,
// );
