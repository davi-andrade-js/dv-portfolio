import React from "react";
import Link from "next/link";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <nav className="w-fit flex flex-col text-[18px] gap-5 font-covesBold">
      <Link
        href="/"
        className={`z-10 cursor-pointer w-fit ${activeSection === "home" ? "underline" : ""}`}
      >
        <p>Início</p>
      </Link>

      <Link
        href="/projects"
        className={`z-10 cursor-pointer w-fit ${activeSection === "projects" ? "underline" : ""}`}
      >
        <p>Projetos</p>
      </Link>
      <Link
        href="/info"
        className={`z-10 cursor-pointer w-fit ${activeSection === "info" ? "underline" : ""}`}
      >
        <p>Sobre</p>
      </Link>
      <Link
        href="/contact"
        className={`z-10 cursor-pointer w-fit ${activeSection === "contact" ? "underline" : ""}`}
      >
        <p>Contato</p>
      </Link>
    </nav>
  );
}
