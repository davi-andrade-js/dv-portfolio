"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setVisible(false);
      }, 700);
    }, 700);
  }, []);

  return (
    <>
      <div
        className={`absolute left-0 top-0 z-50 h-screen w-screen flex-col items-center justify-between bg-zinc-300 transition-all duration-700 ${
          visible ? "flex" : "hidden"
        } ${fadeOut && "opacity-0"}`}
      >
        <p
          className={`text-glow flex h-full items-center justify-center text-2xl text-white${!visible && "hidden"}`}
        >
          Davi Andrade
        </p>
        <footer className="pb-2 text-center text-neutral-950">
          <p>2024 &copy; Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
