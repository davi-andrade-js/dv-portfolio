"use client";

import { useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const [bgOnHover, setBgOnHover] = useState(false);

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setTheme("");
  };

  return (
    <>
      <div className="z-10 cursor-pointer">
        {theme === "dark" ? (
          <Sun
            className={`w-fit ${bgOnHover ? "rounded-full bg-stone-50 bg-opacity-15" : ""}`}
            onClick={() => setLightMode()}
            onMouseEnter={() => setBgOnHover(true)}
            onMouseLeave={() => setBgOnHover(false)}
          />
        ) : (
          <Moon
            className={`w-fit ${bgOnHover ? "rounded-full bg-stone-950 bg-opacity-15" : ""}`}
            onClick={() => setDarkMode()}
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
