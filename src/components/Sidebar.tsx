"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  const route = usePathname();
  // const [onHover, setOnHover] = useState("");

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
    <nav
      className="font-poppinsMedium
     lg:text-md md:text-md flex w-fit flex-col space-y-5 text-base transition-all"
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`z-10 w-fit cursor-pointer transition-all hover:pl-2 ${route === item.href ? "underline " : ""}`}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
}
