import React from "react";

export default function Sidebar() {
  return (
    <div className="grid col-start-1 row-start-2 w-fit">
      <nav className="grid col-start-1 row-start-2 text-[15px] gap-6">
        <p className="z-10 cursor-pointer w-fit">Início</p>
        <p className="z-10 cursor-pointer w-fit">Projetos</p>
        <p className="z-10 cursor-pointer w-fit">Sobre</p>
        <p className="z-10 cursor-pointer w-fit">Contato</p>
      </nav>
    </div>
  );
}
