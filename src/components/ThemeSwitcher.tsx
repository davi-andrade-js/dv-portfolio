"use client";

import { useState } from "react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("");
  const [show, setShow] = useState(false);

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
            className={`w-fit ${show ? "rounded-full bg-stone-50 bg-opacity-15" : ""}`}
            onClick={() => setLightMode()}
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
          />
        ) : (
          <Moon
            className={`w-fit ${show ? "rounded-full bg-stone-950 bg-opacity-15" : ""}`}
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
            onClick={() => {
              setDarkMode();
            }}
          />
        )}
      </div>
    </>
  );
}

// toast(
//   `🌚 Esta é a versão beta. Troca de tema ainda não foi implementada.`,
// );
