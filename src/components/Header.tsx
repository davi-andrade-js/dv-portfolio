"use client";

import { Moon } from "lucide-react";
import { toast } from "sonner";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="font-poppinsRegular mb-8 flex w-full flex-row justify-between">
      <div className="z-10 flex h-fit cursor-default flex-col transition-all">
        <h1 className=" text-3xl transition-all md:text-6xl lg:text-6xl">
          Davi Andrade
        </h1>
        <h1 className=" text-md transition-all md:text-2xl lg:text-2xl">
          Desenvolvedor FrontEnd
        </h1>
      </div>

      <ThemeSwitcher />
    </header>
  );
}
