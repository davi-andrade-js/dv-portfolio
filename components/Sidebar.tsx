import React from "react";

export default function Sidebar() {
  return (
    <div className="grid col-start-1 row-start-2">
      <nav className="mt-20 grid col-start-1 row-start-2 min-w-min text-sm gap-4">
        <p className="z-10 ">Início</p>
        <p className="z-10 ">Projetos</p>
        <p className="z-10 ">Sobre</p>
        <p className="z-10 ">Contato</p>
      </nav>
    </div>
  );
}
