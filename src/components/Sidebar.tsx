import React from "react";
import Link from "next/link";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <nav className="font-covesBold flex w-fit flex-col space-y-5 text-base md:text-lg lg:text-lg">
      <Link
        href="/"
        className={`z-10 w-fit cursor-pointer transition-all duration-150 hover:pl-2 ${activeSection === "home" ? "underline" : ""}`}
      >
        <p>início</p>
      </Link>

      <Link
        href="/projects"
        className={`z-10 w-fit cursor-pointer transition-all duration-150 hover:pl-2 ${activeSection === "projects" ? "underline" : ""}`}
      >
        <p>projetos</p>
      </Link>
      <Link
        href="/info"
        className={`z-10 w-fit cursor-pointer transition-all duration-150 hover:pl-2 ${activeSection === "info" ? "underline" : ""}`}
      >
        <p>sobre</p>
      </Link>
      <Link
        href="/contact"
        className={`z-10 w-fit cursor-pointer transition-all duration-150 hover:pl-2 ${activeSection === "contact" ? "underline" : ""}`}
      >
        <p>contato</p>
      </Link>
    </nav>
  );
}
