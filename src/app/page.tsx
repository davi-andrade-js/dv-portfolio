import React from "react";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";

export default function Home() {
  return (
    <>
      {/* <div className="noise"></div> */}

      <main className="flex flex-col h-[89vh] p-10 m-10 ">
        {/* <div className="absolute justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
          <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        </div> */}

        <header className="flex w-full space-between">
          <div className="z-10 w-full flex-start flex-col font-mono text-sm lg:flex">
            <p className=" left-0 top-0 lg:static lg:w-auto text-2xl">Davi Andrade</p>
            <p className=" left-0 top-0  lg:static lg:w-auto text-xl">Programador FrontEnd</p>
          </div>
          <div className="z-10">
            <Image width={60} height={600} alt="Theme" src={"/dark.png"} />
          </div>
        </header>

        <Sidebar />

        <div className="z-10 w-full flex justify-end">
          <article className="font-mono text-sm text-lg">
            <p className=" w-[150px]">
              {
                "Graduando em Análise e Desenvolvimento de Sistemas e, além da faculdade, estudo programação online para aprimorar continuamente minhas habilidades. Antes do meu primeiro 'Hello World', fiz trabalhos voluntários e estive à frente do protagonismo estudantil no ensino médio."
              }
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
