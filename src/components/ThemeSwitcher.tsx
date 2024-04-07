"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

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
            className={`h-fit w-5 transition-all hover:text-neutral-500 md:w-6 `}
            onClick={() => setDarkMode()}
          />
        ) : (
          <Sun
            className={`h-fit w-fit transition-all hover:text-neutral-500 `}
            onClick={() => setLightMode()}
          />
        )}
      </div>
    </>
  );
}

// toast(
//   `🌚 Esta é a versão beta. Troca de tema ainda não foi implementada.`,
// );
