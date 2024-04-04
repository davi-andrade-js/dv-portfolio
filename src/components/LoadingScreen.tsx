"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);    
    }, 2000);
  }, []);

  return (
    <div
      className={`absolute left-0 top-0 z-30 h-screen w-screen items-center justify-center bg-slate-400 opacity-100 duration-700 ${
        visible ? "flex" : "z-0 bg-opacity-0"
      }`}
    >
      <h1
        className={`animate-pulse text-2xl text-white ${!visible && "hidden"}`}
      >
        Davi Andrade
      </h1>
    </div>
  );
}
