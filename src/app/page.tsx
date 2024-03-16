import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="noise"></div>
      <main className="flex h-[89vh] flex-col p-10 m-10 border glassmorphism">
        <div className="flex space-between">
          <div className="z-10 max-w-5xl w-full flex-start flex-col font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Davi Andrade</p>
            <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Desenvolvedor FrontEnd</p>
          </div>
          <div className="flex flex-end">
            <Image width={50} height={50} alt="Theme" src={"/dark.png"} />
          </div>
        </div>

        <div className="z-10 max-w-5xl w-full mt-20 flex-start flex-col font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Início</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Projetos</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Sobre</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Contato</p>
        </div>
      </main>
    </>
  );
}
