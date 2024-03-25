import React from "react";
import Link from "next/link";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <nav className="w-fit flex flex-col text-base md:text-lg lg:text-lg space-y-5 font-covesBold">
      <Link
        href="/"
        className={`z-10 cursor-pointer w-fit ${activeSection === "home" ? "underline" : ""}`}
      >
        <p>início</p>
      </Link>

      <Link
        href="/projects"
        className={`z-10 cursor-pointer w-fit ${activeSection === "projects" ? "underline" : ""}`}
      >
        <p>projetos</p>
      </Link>
      <Link
        href="/info"
        className={`z-10 cursor-pointer w-fit ${activeSection === "info" ? "underline" : ""}`}
      >
        <p>sobre</p>
      </Link>
      <Link
        href="/contact"
        className={`z-10 cursor-pointer w-fit ${activeSection === "contact" ? "underline" : ""}`}
      >
        <p>contato</p>
      </Link>
    </nav>
  );
}
