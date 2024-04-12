"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  const route = usePathname();

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
    <nav className="font-poppinsMedium flex w-24 flex-col space-y-4 text-base transition-all md:space-y-5">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`nav z-10 w-fit cursor-pointer transition-all lg:hover:pl-2 ${route === item.href ? "underline" : ""}`}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
}
