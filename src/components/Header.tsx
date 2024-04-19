"use client";
import Link from "next/link";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="font-poppinsRegular mb-6 flex w-full flex-row justify-between md:mb-8">
      <div className="z-10 transition-all">
        <Link href={"/"} className="h-fit cursor-pointer">
          <h1 className="text-3xl transition-all md:text-6xl">Davi Andrade</h1>
        </Link>
        <h2 className="cursor-default text-base transition-all md:text-2xl">
          Desenvolvedor Front-End
        </h2>
      </div>

      <div className="z-10 flex h-fit flex-row items-center space-x-3 md:space-x-4">
        <div key={"GitHub"} className="display flex flex-row space-x-1">
          <Link
            className="h-fit w-full"
            key={"GitHub"}
            href="https://github.com/davi-andrade-js"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-7 w-7 cursor-pointer transition-all md:hover:text-neutral-500" />
          </Link>
          <Link
            className="h-fit w-full"
            key={"LinkedIn"}
            href={"https://www.linkedin.com/in/andrade-davi/"}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-7 w-7 cursor-pointer transition-all md:hover:text-neutral-500" />
          </Link>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
