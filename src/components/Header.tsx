"use client";
import Link from "next/link";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="font-poppinsRegular mb-8 flex w-full flex-row justify-between">
      <div className="z-10 flex h-fit cursor-default flex-col transition-all">
        <h1 className=" text-3xl transition-all md:text-6xl lg:text-6xl">
          Davi Andrade
        </h1>
        <h2 className=" text-md transition-all md:text-2xl lg:text-2xl">
          Desenvolvedor FrontEnd
        </h2>
      </div>

      <div className="z-10 flex flex-row space-x-4">
        <div key={"GitHub"} className="display flex flex-row space-x-1">
          <Link
            key={"GitHub"}
            href="https://github.com/davi-andrade-js"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="cursor-pointer transition-all hover:text-neutral-500" />
          </Link>
          <Link
            key={"LinkedIn"}
            href={"https://www.linkedin.com/in/andrade-davi/"}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="cursor-pointer transition-all hover:text-neutral-500" />
          </Link>
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
}
