"use client";
import Link from "next/link";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="font-poppinsRegular mb-8 flex w-full flex-row justify-between">
      <div className="z-10">
        <Link href={"/"} className="h-fit cursor-pointer transition-all">
          <h1 className="text-2xl transition-all md:text-6xl">Davi Andrade</h1>
        </Link>
        <h2 className="cursor-default text-sm transition-all md:text-2xl">
          Desenvolvedor FrontEnd
        </h2>
      </div>

      <div className="z-10 flex h-fit flex-row items-center space-x-3 md:space-x-4">
        <div key={"GitHub"} className="display flex flex-row space-x-1">
          <Link
            className="h-fit"
            key={"GitHub"}
            href="https://github.com/davi-andrade-js"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-5 cursor-pointer transition-all hover:text-neutral-500 md:w-6" />
          </Link>
          <Link
            className="h-fit"
            key={"LinkedIn"}
            href={"https://www.linkedin.com/in/andrade-davi/"}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-5 cursor-pointer transition-all hover:text-neutral-500 md:w-6" />
          </Link>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
