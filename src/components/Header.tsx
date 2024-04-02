"use client";

import { Moon } from "lucide-react";
import { toast } from "sonner";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="font-covesLight mb-8 flex w-full flex-row justify-between">
      <div className="z-10 flex h-fit cursor-default flex-col transition-all duration-150">
        <p className=" text-3xl transition-all duration-150 md:text-6xl lg:text-6xl">
          Davi Andrade
        </p>
        <p className=" text-md transition-all duration-150 md:text-2xl lg:text-2xl">
          Desenvolvedor FrontEnd
        </p>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
