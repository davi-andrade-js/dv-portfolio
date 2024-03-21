import React from "react";

export default function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <div className="w-fit">
      <nav className="flex flex-col text-[15px] gap-6">
        <p className={`z-10 cursor-pointer w-fit ${activeSection === "home" ? "font-bold" : ""}`}>
          Início
        </p>
        <p
          className={`z-10 cursor-pointer w-fit ${activeSection === "projects" ? "font-bold" : ""}`}
        >
          Projetos
        </p>
        <p className={`z-10 cursor-pointer w-fit ${activeSection === "info" ? "font-bold" : ""}`}>
          Sobre
        </p>
        <p
          className={`z-10 cursor-pointer w-fit ${activeSection === "contact" ? "font-bold" : ""}`}
        >
          Contato
        </p>
      </nav>
    </div>
  );
}
