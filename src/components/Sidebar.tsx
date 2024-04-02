import React from "react";
import Link from "next/link";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const navItems = [
    {
      name: "Início",
      href: "/",
      section: "home",
    },
    {
      name: "Projetos",
      href: "/projects",
      section: "projects",
    },
    {
      name: "Sobre",
      href: "/info",
      section: "info",
    },
    {
      name: "Contato",
      href: "/contact",
      section: "contact",
    },
  ];

  return (
    <nav className="font-covesBold flex w-fit flex-col space-y-5 text-base transition-all duration-150 md:text-lg lg:text-lg">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`z-10 w-fit cursor-pointer transition-all duration-150 hover:pl-2 ${activeSection === item.section ? "underline" : ""}`}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
}
