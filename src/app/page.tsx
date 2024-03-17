import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="noise"></div>

      {/* <div className="absolute">
        <div className="absolute inset-0 justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
          <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
        </div>
      </div> */}

      <main className="flex h-[89vh] flex-col p-10 m-10 glassmorphism">
        <div className="flex space-between">
          <div className="z-10 w-full flex-start flex-col font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex lg:static lg:w-auto text-2xl">Davi Andrade</p>
            <p className="fixed left-0 top-0 flex lg:static lg:w-auto text-xl">
              Desenvolvedor FrontEnd
            </p>
          </div>
          <div className="flex flex-end">
            <Image width={60} height={600} alt="Theme" src={"/dark.png"} />
          </div>
        </div>

        <div className="z-10 max-w-5xl w-full mt-20 flex-start flex-col font-mono text-sm lg:flex text-lg gap-4">
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Início</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Projetos</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Sobre</p>
          <p className="fixed left-0 top-0 flex lg:static lg:w-auto ">Contato</p>
        </div>
      </main>
    </>
  );
}
