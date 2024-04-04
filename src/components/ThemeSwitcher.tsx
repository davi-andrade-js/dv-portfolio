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
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("light");
      return;
    }
  }, []);

  const setLightMode = () => {
    document.documentElement.classList.add("light");
    localStorage.theme = "light";
  };

  const setDarkMode = () => {
    document.documentElement.classList.remove("light");
    localStorage.theme = "";
  };

  return (
    <>
      <div className="z-10 cursor-pointer">
        {theme === "light" ? (
          <Moon
            className={`w-fit ${bgOnHover ? "rounded-full bg-stone-950 bg-opacity-15" : ""}`}
            onClick={() => setDarkMode()}
            onMouseEnter={() => setBgOnHover(true)}
            onMouseLeave={() => setBgOnHover(false)}
          />
        ) : (
          <Sun
            className={`w-fit ${bgOnHover ? "rounded-full bg-stone-50 bg-opacity-20" : ""}`}
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
