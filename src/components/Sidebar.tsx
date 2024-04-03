import React from "react";
import Link from "next/link";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  const navItems = [
    {
      name: "INÍCIO",
      href: "/",
      section: "home",
    },
    {
      name: "PROJETOS",
      href: "/projects",
      section: "projects",
    },
    {
      name: "SOBRE",
      href: "/info",
      section: "info",
    },
    {
      name: "CONTATO",
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
          className={`z-10 w-fit cursor-pointer transition-all hover:pl-2 ${activeSection === item.section ? "underline" : ""}`}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
}
